import React from 'react';
import PropTypes from 'prop-types';
import styles from '../link.module.scss';

const PrimaryLink = ({title, link}) => (
    <a href={link} className={styles.link}>{title}</a>
);

PrimaryLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
export default PrimaryLink;