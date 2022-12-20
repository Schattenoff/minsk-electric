import { useState } from "react"
import classes from "./table-row.module.css"

const TableRow = ({ item, checked, onChangeChecked, amount, checkedList }) => {
   const [totalAmount, setTotalAmount] = useState(checked ? amount : 0)

   const handlerAmountChange = (e) => {
      if (e.target.value < 0) {
         return e.target.value = "";
      }
      setTotalAmount(e.target.value)
      checkedList[checkedList.findIndex(listItem => listItem.id === item.id)].value = +(e.target.value * item.cost).toFixed(2)
   }

   return (
      <tr className={checked ? classes.active : ""}>
         <td className={classes.cost__table}><input type={"checkbox"} checked={checked} onChange={onChangeChecked} /></td>
         <td>{item.name}</td>
         <td className={classes.cost__table}>{item.measure}</td>
         <td className={classes.cost__table}>{item.cost}</td>
         <td className={`${classes.cost__table} ${classes.amount}`}>
            {checked ? <input
               type="number"
               value={totalAmount}
               onChange={handlerAmountChange}
            /> : <p>0</p>}

         </td>
         <td className={classes.cost__table}>{(totalAmount * item.cost).toFixed(2)}</td>
      </tr >
   )
}

export default TableRow