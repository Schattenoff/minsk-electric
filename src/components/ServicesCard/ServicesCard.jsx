import classes from './services-card.module.css';

const ServicesCard = ({ imgUrl, title }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={imgUrl} alt={title} />
      <h3 className={classes.card__title}>{title}</h3>
      <a href="tel:+375336607040" className={classes.card__button}>
        Вызвать мастера
      </a>
    </div>
  );
};

export default ServicesCard;