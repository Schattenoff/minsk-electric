import Logo from '../Header/components/Logo/Logo';
import Navigation from '../Header/components/Navigation/Navigation';
import PageContainer from '../PageContainer/PageContainer';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <PageContainer>
        <div className={classes.footer__content}>
          <Logo />
          <Navigation />
          <div><a href="tel:+375336607040" className={classes.phone__link}>+375 33 660 70 40</a></div>
        </div>
        <p className={classes.footer__about} dangerouslySetInnerHTML={{ __html: `Минск Электрик ${new Date().getFullYear()}, все права защищены.<br>УНП: 690828485.<br>Подробнее на <a href="https://domumir.by/" target="_blank">domumir.by</a>` }} />

      </PageContainer>
    </footer>
  );
};

export default Footer;