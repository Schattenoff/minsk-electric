import { useState } from "react";
import PageContainer from "../PageContainer/PageContainer";
import classes from "./cost.module.css";

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
          {openCost && (
            <table className={classes.cost__table}>
              <tr>
                <th>Наименование</th>
                <th>Наименование</th>
              </tr>
              <tr>
                <td>Монтаж</td>
                <td>Монтаж</td>
              </tr>
              <tr>
                <td>Монтаж</td>
                <td>Монтаж</td>
              </tr>
            </table>
          )}
        </div>
      </PageContainer>
    </section >
  );
};

export default Cost;