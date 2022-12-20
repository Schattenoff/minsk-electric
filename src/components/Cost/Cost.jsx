import { useState } from "react";
import PageContainer from "../PageContainer/PageContainer";
import classes from "./cost.module.css";
import { TablesData } from "./cost.constants"
import Table from "./Table/Table";
import TableHeader from "./TableHeader/TableHeader";
import { useAppReducer } from "../../hooks/useAppReducer";

const initialState = {
  1: false,
  2: false,
}

const Cost = () => {
  const [state, _] = useAppReducer()
  const [openTables, setOpenTables] = useState(initialState);

  const toggleCost = (tableId) => setOpenTables({
    ...openTables,
    [tableId]: !openTables[tableId]
  });

  return (
    <section id="cost" className={classes.cost}>
      <PageContainer>
        <h1 className="title">Рассчитать стоимость</h1>
        <div className={classes.cost__content}>
          {TablesData.map(({ id, title, data }) => (
            <div key={id}>
              <TableHeader title={title} handlerToggle={() => toggleCost(id)} isOpen={openTables[id]} />
              <Table data={data} isOpen={openTables[id]} tableId={id} />
            </div>
          ))}

          <button onClick={() => console.log(state)}>Рассчитать</button>
        </div>
      </PageContainer>
    </section >
  );
};

export default Cost;