import { useState } from "react"
import classes from "./table-row.module.css"

const TableRow = ({ item, checked, onChangeChecked, amount, checkedList }) => {
   const [totalAmount, setTotalAmount] = useState(checked ? amount : 0)

   const handlerAmountChange = (e) => {
      setTotalAmount(e.target.value)
      checkedList[checkedList.findIndex(listItem => listItem.id === item.id)].value = +(e.target.value * item.cost).toFixed(2)
   }

   return (
      <tr className={checked ? classes.active : ""}>
         <td><input type={"checkbox"} checked={checked} onChange={onChangeChecked} /></td>
         <td>{item.name}</td>
         <td>{item.measure}</td>
         <td>{item.cost}</td>
         <td className={classes.cost__table_amount}>
            <input
               type="number"
               min="0"
               value={totalAmount}
               className={checked ? classes.visible : classes.hidden}
               onChange={handlerAmountChange}
            />
         </td>
         <td>{(totalAmount * item.cost).toFixed(2)}</td>
      </tr>
   )
}

export default TableRow