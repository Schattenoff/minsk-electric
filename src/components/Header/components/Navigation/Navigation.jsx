import { Link } from 'react-scroll';
import { navigationItems } from './navigation.constants';
import classes from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list__items}>
        {navigationItems.map((nav) => <li className={classes.list__item} key={nav.id}><Link to={nav.href} offset={-75} smooth={true} spy={true} duration={500} >{nav.title}</Link></li>)}
      </ul>
    </nav>
  );
};

export default Navigation;