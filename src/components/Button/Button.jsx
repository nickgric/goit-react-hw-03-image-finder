import styles from './Button.module.css';

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
