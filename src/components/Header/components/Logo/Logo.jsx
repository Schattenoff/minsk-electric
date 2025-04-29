import { Link } from "react-scroll";
import classes from './logo.module.css';

const Logo = () => {
  return (
    <Link to='general' smooth={true}>
      <h1 className={classes.logo}>Минск Электрик</h1>
    </Link>
  );
};

export default Logo;