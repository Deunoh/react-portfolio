import React from 'react';
import PropTypes from 'prop-types';
import './HomeButton.scss';

const HomeButton = ({ children }) => {
  return (
    <button className="custom-button" type="button">
      {children}
    </button>
  );
};

HomeButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeButton;
