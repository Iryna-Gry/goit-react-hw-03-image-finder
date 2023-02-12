import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onButtonClick }) => {
  return (
    <button type="submit" className={css.Button} onClick={onButtonClick}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
