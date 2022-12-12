import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
