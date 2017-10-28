import React from 'react'
import PropTypes from 'prop-types';
import '../styles/button.scss';

const Button = ({title, link}) => (
    <a href={link} className="primary-button">{title}</a>
);


Button.propTypes = {
    title: PropTypes.string.isRequired
};

export default Button;
