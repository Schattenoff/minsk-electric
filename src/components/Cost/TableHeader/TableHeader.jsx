import classes from "./table-header.module.css"

const TableHeader = ({ title, handlerToggle, isOpen }) => {
   return (
      <div className={classes.general__list}>
         <h2>{title}</h2>
         <button onClick={handlerToggle}>svg {isOpen ? "close" : "open"}</button>
      </div>
   )
}

export default TableHeader