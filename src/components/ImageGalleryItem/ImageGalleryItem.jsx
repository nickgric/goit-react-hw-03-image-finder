import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, id, modalHandler }) => {
  return (
    <li onClick={modalHandler} className={styles.item}>
      <img src={photo} name={id} alt="Found image" />
    </li>
  );
};

export default ImageGalleryItem;
