import PageContainer from '../PageContainer/PageContainer';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <PageContainer>
        <div className={classes.header__content}>
          <Logo />
          <Navigation />
          <div><a href="tel:+375336607040" className={classes.phone__link}>+375 33 660 70 40</a></div>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;