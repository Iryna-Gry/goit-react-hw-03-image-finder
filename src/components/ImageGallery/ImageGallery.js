import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(image => {
        return (
          <ImageGalleryItem
            src={image.webformatURL}
            key={image.id}
            smallImageURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
