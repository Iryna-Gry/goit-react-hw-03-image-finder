import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, smallImageURL, largeImageURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={src} alt="" className={css['ImageGalleryItem-image']} />
    </li>
  );
};

export default ImageGalleryItem;
