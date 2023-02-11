import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(image => {
        return (
          <ImageGalleryItem
            src={image.webformatURL}
            key={image.id}
            name={image.name}
            smallImageURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onImageClick={onImageClick}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
