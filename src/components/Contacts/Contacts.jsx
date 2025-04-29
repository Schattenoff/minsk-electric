import PageContainer from "../PageContainer/PageContainer";
import classes from './contacts.module.css';

const Contacts = () => {
  return (
    <section id="contacts" className={classes.contacts}>
      <PageContainer>
        <h1 className="title">Контакты</h1>
        <div className={classes.contacts__content}>
          <a className={classes.contacts__item} href='tel:+375336607040'>
            <img className={classes.contacts__item_img} src='/img/contacts/phone.png' alt='phone' />
            <span>+375 33 660 70 40</span>
          </a>
          <a className={classes.contacts__item} href='https://viber.click/79375336607040' target="_blank" rel="noreferrer">
            <img className={classes.contacts__item_img} src='/img/contacts/viber.png' alt='viber' />
            <span>+375 33 660 70 40</span>
          </a>
          <a className={classes.contacts__item} href='https://t.me/Elmedved' target="_blank" rel="noreferrer">
            <img className={classes.contacts__item_img} src='/img/contacts/telegram.png' alt='telegram' />
            <span>@Elmedved</span>
          </a>
        </div>
      </PageContainer>
    </section>
  );
};

export default Contacts;