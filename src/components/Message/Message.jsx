import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Message;
