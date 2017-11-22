import React from 'react';
import PropTypes from 'prop-types';
import styles from '../link.module.scss';

const SecondaryLink = ({title, link}) => (
    <a href={link} className={styles.secondaryLink}>{title}</a>
);

SecondaryLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
export default SecondaryLink;