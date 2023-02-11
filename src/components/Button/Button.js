import React from 'react';
import css from './Button.module.css';

const Button = ({ onButtonClick }) => {
  return (
    <button type="submit" className={css.Button} onClick={onButtonClick}>
      Load More
    </button>
  );
};

export default Button;
