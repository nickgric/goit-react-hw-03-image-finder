import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, id, modalHandler }) => {
  return (
    <li onClick={modalHandler} className={styles.item}>
      <img src={photo} name={id} alt="Something interesting" />
    </li>
  );
};

export default ImageGalleryItem;
