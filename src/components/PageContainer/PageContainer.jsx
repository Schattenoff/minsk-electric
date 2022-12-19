import classes from './page-container.module.css';

const PageContainer = ({ children }) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

export default PageContainer;