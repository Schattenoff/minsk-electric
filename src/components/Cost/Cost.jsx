import { useState } from "react";
import PageContainer from "../PageContainer/PageContainer";
import classes from "./cost.module.css";
import { TablesData } from "./cost.constants"
import Table from "./Table/Table";
import TableHeader from "./TableHeader/TableHeader";
import { useAppReducer } from "../../hooks/useAppReducer";
import { resetWork, setWork } from "../../reducer/actions"
import CheckListModal from "../CheckListModal/CheckListModal";

import { useMemo } from "react";
import { useCallback } from "react";

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

  const toggleCost = useCallback((tableId) => {
    setOpenTables(openTables.map((value, index) => {
      if (index === tableId - 1) {
        value = !value
      }
      return value
    }))
  }, [openTables])

  const updateCheckedLists = useCallback((id, checkedList) => {
    checkedLists[id] = checkedList
    setCheckedLists(checkedLists.map((list, index) => {
      if (index === id) {
        list = checkedList
      }

      return list
    }))
  }, [checkedLists])

  const handleCalculate = useCallback(() => {
    dispatch(setWork(checkedLists.filter(list => list.length > 0)))
    onOpen()
  }, [checkedLists, dispatch])

  const handleResetCheckedLists = useCallback(() => {
    setCheckedLists([...initialState.checkedLists])
    setOpenTables(initialState.isOpens)
    dispatch(resetWork())
  }, [dispatch])


  const isListEmpty = useMemo(() => checkedLists.every(subArray => subArray.length === 0), [checkedLists]);



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
          <div className={classes.cost__actions}>
            <button className={classes.cost__button} onClick={handleCalculate} disabled={isListEmpty}>Рассчитать</button>
            {!isListEmpty && <button className={classes.cost__button_reset} onClick={handleResetCheckedLists}>Сброс</button>}
          </div>
        </div>

        <CheckListModal isOpen={isOpen} onClose={onClose} list={state} />
      </PageContainer>
    </section>
  );
};

export default Cost;