import styles from './AuthorTitle.module.css';

export const AuthorTitle = ({ title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
};

export default AuthorTitle;
