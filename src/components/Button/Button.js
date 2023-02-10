import React from 'react';
import css from './Button.module.css';

const Button = () => {
  return (
    <button type="submit" className={css.Button}>
      Load More
    </button>
  );
};

export default Button;
