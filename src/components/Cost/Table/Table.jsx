import { useState } from "react"
import TableRow from "./TableRow/TableRow"
import classes from "./table.module.css"

const Table = ({ data, isOpen, tableId }) => {
   const [checkedList, setCheckedList] = useState([])

   const handlerSelectChange = (id) => {
      let selection = [...checkedList];
      const keyIndex = selection.findIndex(item => item.id === id);

      if (keyIndex >= 0) {
         selection = [
            ...selection.slice(0, keyIndex),
            ...selection.slice(keyIndex + 1)
         ];
      } else {
         selection.push({
            id,
            value: 0
         });
      }
      setCheckedList(selection)
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
                  tableId={tableId}
                  amount={checkedList.find(listItem => listItem.id === item.id)?.value || 0}
                  onChangeChecked={() => handlerSelectChange(item.id)}
                  checked={checkedList.some(listItem => listItem.id === item.id)}
                  checkedList={checkedList}
               />
            ))}

         </tbody>
      </table>
   )
}

export default Table