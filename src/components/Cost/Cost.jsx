import { useState } from "react";
import PageContainer from "../PageContainer/PageContainer";
import classes from "./cost.module.css";
import { TablesData } from "./cost.constants"
import Table from "./Table/Table";
import TableHeader from "./TableHeader/TableHeader";
import { useAppReducer } from "../../hooks/useAppReducer";
import { resetWork, setWork } from "../../reducer/actions"
import CheckListModal from "../CheckListModal/CheckListModal";

const initialState = {
  isOpens: new Array(7).fill(false),
  checkedLists: new Array(7).fill([])
}

const Cost = () => {
  const [state, dispatch] = useAppReducer()
  const [openTables, setOpenTables] = useState(initialState.isOpens);
  const [checkedLists, setCheckedLists] = useState(initialState.checkedLists)
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const toggleCost = (tableId) => {
    setOpenTables(openTables.map((value, index) => {
      if (index === tableId - 1) {
        value = !value
      }
      return value
    }))
  };

  const updateCheckedLists = (id, checkedList) => {
    checkedLists[id] = checkedList
    setCheckedLists(checkedLists.map((list, index) => {
      if (index === id) {
        list = checkedList
      }

      return list
    }))
  }

  const handlerCalculate = () => {
    dispatch(setWork(checkedLists.filter(list => list.length > 0)))
    onOpen()
  }

  const handlerClickBuy = () => {
    dispatch(resetWork())
    setCheckedLists(initialState.checkedLists)
    setOpenTables(initialState.isOpens)
    onClose()
  }

  return (
    <section id="cost" className={classes.cost}>
      <PageContainer>
        <h1 className="title">Рассчитать стоимость</h1>
        <div className={classes.cost__content}>
          {TablesData.map(({ id, title, data }) => (
            <div key={id}>
              <TableHeader title={title} handlerToggle={() => toggleCost(id)} isOpen={openTables[id - 1]} />
              <Table data={data} isOpen={openTables[id - 1]} tableId={id} checkedList={checkedLists[id - 1]} updateCheckedLists={updateCheckedLists} id={id} />
            </div>
          ))}

          <button onClick={handlerCalculate}>Рассчитать</button>
        </div>

        <CheckListModal isOpen={isOpen} onClose={onClose} list={state} onClick={handlerClickBuy} />
      </PageContainer>
    </section >
  );
};

export default Cost;