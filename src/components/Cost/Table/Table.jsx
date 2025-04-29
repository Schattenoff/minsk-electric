import TableRow from "./TableRow/TableRow"
import classes from "./table.module.css"

const Table = ({ data, isOpen, checkedList, updateCheckedLists, id }) => {

  const handlerSelectChange = (item) => {
    let selection = [...checkedList];
    const keyIndex = selection.findIndex((select) => select.id === item.id);

    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      selection.push({
        ...item,
        sum: 0,
        amount: 0,
      });
    }

    updateCheckedLists(id - 1, selection)
  }

  return (
    <table className={`${classes.cost__table} ${!isOpen ? classes.hidden : ""}`}>
      <thead>
        <tr>
          <th></th>
          <th>Наименование работ</th>
          <th>Ед. изм.</th>
          <th>Цена (BYR)</th>
          <th>Кол-во</th>
          <th>Сумма (BYR)</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TableRow
            key={item.id}
            item={item}
            amount={checkedList.find(listItem => listItem.id === item.id)?.value || 0}
            onChangeChecked={() => handlerSelectChange(item)}
            checked={checkedList.some(listItem => listItem.id === item.id)}
            checkedList={checkedList}
          />
        ))}

      </tbody>
    </table>
  )
}

export default Table;

