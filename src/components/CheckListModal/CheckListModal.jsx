import ReactDOM from 'react-dom';
import classes from "./check-list-modal.module.css"
import { formatPrice } from "../../utils";

const CheckListModal = ({ isOpen, onClose, list, onClick }) => {
  if (!isOpen) return null

  const totalSum = list.flat().reduce((total, item) => total += item.sum, 0)

  return ReactDOM.createPortal(
    <>
      <div className={classes.modal__overlay} />
      <div className={classes.modal}>
        <div className={classes.modal__content}>
          <button className={classes.modal__closeButton} onClick={onClose}><img alt="close-modal-button" src={"./img/cancel.png"} /></button>

          <h3 className={classes.modal__content_heading}>Чек-Лист</h3>

          <div className={`${classes.modal__content_works} ${classes.modal__content_worksHeading}`}>
            <h6>Наименование</h6>
            <span>Количество</span>
            <span>Цена за изм.</span>
            <span>Сумма</span>
          </div>
          {list.flat().map(item => (
            <div key={item.name} className={classes.modal__content_works}>
              <h6>{item.name}</h6>
              <span>{item.amount}</span>
              <span>{item.cost}</span>
              <span>{formatPrice(item.sum)}</span>
            </div>
          ))}

          <div className={classes.modal__content_footer}>
            <h4>Всего: {formatPrice(totalSum)}</h4>
            <button onClick={onClick}>Оформить</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default CheckListModal