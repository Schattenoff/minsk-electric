import classes from "./table-header.module.css"

const TableHeader = ({ title, handlerToggle, isOpen }) => {
  return (
    <div className={classes.general__list}>
      <h2>{title}</h2>
      <div className={classes.general__btn} onClick={handlerToggle}><div className={`${classes.svg__icon} ${isOpen ? classes.active : ""}`}></div></div>
    </div>
  )
}

export default TableHeader