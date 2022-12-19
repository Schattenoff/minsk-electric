import PageContainer from '../PageContainer/PageContainer';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <PageContainer>
        <h1>Footer</h1>
      </PageContainer>
    </footer>
  );
};

export default Footer;