import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

class Modal extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleMouseClick = e => {
    if (e.target && this.modalRef.current !== e.target) return;
    this.props.onClose();
  };

  render() {
    const { id, largeImageURL } = this.props;
    return createPortal(
      <div
        className={css.Overlay}
        ref={this.modalRef}
        onClick={this.handleMouseClick}
        role="presentation"
      >
        <div className={css.Modal}>
          <img src={largeImageURL} alt="img" id={id} />
        </div>
      </div>,
      MODAL_ROOT
    );
  }
}

export default Modal;

//  const instance = ;
//   instance.show();
//   function onEscapePress(event) {
//     if (event.key === 'Escape') {
//       instance.close();
//     }
//   }
//   return instance;
{
  /* <img src=${event.target.source}
      alt=${event.target.alt}
      style="height:90vh; object-fit:contain;" /> */
}
