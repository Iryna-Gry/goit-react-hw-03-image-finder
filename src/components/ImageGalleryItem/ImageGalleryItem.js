import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

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
    const { src, alt, smallImageURL, largeImageURL, id } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          source={largeImageURL}
          className={css['ImageGalleryItem-image']}
          onClick={this.handleModal}
        />
        {this.state.isOpen && (
          <Modal
            id={id}
            largeImageURL={largeImageURL}
            onClose={this.handleModal}
          ></Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
