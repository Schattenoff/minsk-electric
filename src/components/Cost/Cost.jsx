import { useState } from "react";
import PageContainer from "../PageContainer/PageContainer";
import classes from "./cost.module.css";
import { PrepareWorks } from "./cost.constants"
import Table from "./Table/Table";

const Cost = () => {
  const [openCost, setOpenCost] = useState(false);

  const toggleCost = () => setOpenCost((prev) => !prev)

  return (
    <section id="cost" className={classes.cost}>
      <PageContainer>
        <h1 className="title">Рассчитать стоимость</h1>
        <div className={classes.cost__content}>
          <div className={classes.general__list}>
            <h2>1. Подготовительные работы (штроба, отверстия, ниши)</h2>
            <button onClick={toggleCost}>svg {openCost ? "close" : "open"}</button>
          </div>

          <Table data={PrepareWorks} isOpen={openCost} />

        </div>
      </PageContainer>
    </section >
  );
};

export default Cost;