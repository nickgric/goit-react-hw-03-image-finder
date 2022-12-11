import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, id }) => {
  return (
    <li className="gallery-item" id={id}>
      <img src={photo} />
    </li>
  );
};

export default ImageGalleryItem;
