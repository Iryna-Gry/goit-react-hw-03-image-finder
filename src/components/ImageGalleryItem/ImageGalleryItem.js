import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  handleModal = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };
  render() {
    const { src, largeImageURL } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={src}
          alt=""
          source={largeImageURL}
          className={css['ImageGalleryItem-image']}
          onClick={this.handleModal}
        />
        {this.state.isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.handleModal}
          ></Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
