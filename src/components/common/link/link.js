import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const linkPropTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
const buttonPropTypes = {
    title: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};

export const SecondaryLink = ({title, link}) => (
    <a href={link} className={styles.secondaryLink}>{title}</a>
);
SecondaryLink.propTypes = linkPropTypes;

export const PrimaryLink = ({title, link}) => (
    <a href={link} className={styles.link}>{title}</a>
);
PrimaryLink.propTypes = linkPropTypes;

export const SecondaryButton = ({title, clickHandler}) => (
    <button onClick={clickHandler} className={styles.secondaryLink}>{title}</button>
);
SecondaryButton.propTypes = buttonPropTypes;

export const PrimaryButton = ({title, clickHandler}) => (
    <button onClick={clickHandler} className={styles.link}>{title}</button>
);
PrimaryButton.propTypes = buttonPropTypes;