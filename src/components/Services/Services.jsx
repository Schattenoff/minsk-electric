import PageContainer from '../PageContainer/PageContainer';
import ServicesCard from '../ServicesCard/ServicesCard';
import { CARD_ITEMS } from './services.constants';
import classes from './services.module.css';

const Services = () => {
  return (
    <section id="services" className={classes.services}>
      <PageContainer>
        <h1 className="title">Электромонтажные работы</h1>
        <div className={classes.services__cards}>
          {CARD_ITEMS.map(({ imgUrl, title, id }) => (
            <ServicesCard
              key={id}
              imgUrl={imgUrl}
              title={title}
            />
          ))
          }
        </div>
      </PageContainer>
    </section>
  );
};

export default Services;