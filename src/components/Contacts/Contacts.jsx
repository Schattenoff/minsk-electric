import PageContainer from "../PageContainer/PageContainer";
import classes from './contacts.module.css';

const Contacts = () => {
  return (
    <section id="contacts" className={classes.contacts}>
      <PageContainer>
        <h1 className="title">Контакты</h1>
      </PageContainer>
    </section>
  );
};

export default Contacts;