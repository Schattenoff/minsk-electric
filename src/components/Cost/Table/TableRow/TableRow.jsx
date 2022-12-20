import { useState } from "react"
import classes from "./table-row.module.css"
import { useAppReducer } from "../../../../hooks/useAppReducer"
import { addWork } from "../../../../reducer/actions"

const TableRow = ({ item, checked, onChangeChecked, amount, checkedList, tableId }) => {
   const [_, dispatch] = useAppReducer()
   const [totalAmount, setTotalAmount] = useState(checked ? amount : 0)

   const handlerAmountChange = (e) => {
      if (e.target.value < 0) {
         return e.target.value = "";
      }
      setTotalAmount(e.target.value)

      const totalCost = +(e.target.value * item.cost).toFixed(2)
      const itemIndex = checkedList.findIndex(listItem => listItem.id === item.id)
      checkedList[itemIndex] = {
         ...checkedList[itemIndex],
         value: totalCost
      }

      dispatch(addWork({
         tableId,
         newItem: {
            id: item.id,
            name: item.name,
            value: totalCost
         }
      }))
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