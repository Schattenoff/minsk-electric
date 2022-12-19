import { Link } from 'react-scroll';
import PageContainer from '../PageContainer/PageContainer';
import classes from './general.module.css';

const General = () => {
  return (
    <section id="general" className={classes.general}>
      <div className={classes.general__color} />
      <PageContainer>
        <div className={classes.general__content}>
          <h1 className={classes.general__title}>Электромонтажные работы по Минску и в области</h1>
          <p>Любой сложности. Низкие цены. Качественно.</p>
          <Link className={classes.general__button} to="services" offset={-75} duration={500} smooth={true} spy={true}>Узнать подробнее</Link>
        </div>
      </PageContainer>
    </section>
  );
};

export default General;