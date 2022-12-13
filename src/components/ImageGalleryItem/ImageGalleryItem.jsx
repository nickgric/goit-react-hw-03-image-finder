import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ small, large, id, modalHandler }) => {
  return (
    <li onClick={() => modalHandler(large)} className={styles.item} key={id}>
      <img src={small} name={id} alt="Something interesting" />
    </li>
  );
};

export default ImageGalleryItem;
