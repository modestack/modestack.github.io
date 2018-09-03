import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const commonPropTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string
};
const linkPropTypes = {
    ...commonPropTypes,
    link: PropTypes.string.isRequired
};
const buttonPropTypes = {
    ...commonPropTypes,
    clickHandler: PropTypes.func.isRequired
};

export const Link = ({title, link, textColor, backgroundColor, className = styles.link}) => (
    <a href={link} className={className} style={{backgroundColor: backgroundColor, color: textColor}}>{title}</a>
);

Link.propTypes = linkPropTypes;

export const SecondaryLink = ({title, link}) => (
    <Link link={link} title={title} textColor='#1E365C' className={styles.secondaryLink}/>
);
SecondaryLink.propTypes = linkPropTypes;

export const PrimaryLink = ({title, link}) => (
    <Link link={link} title={title} textColor='#fff' backgroundColor='#207ce5'/>
);
PrimaryLink.propTypes = linkPropTypes;

export const Button = ({title, clickHandler, backgroundColor, textColor}) => (
    <button onClick={clickHandler} className={styles.link} style={{backgroundColor: backgroundColor, color: textColor}}>{title}</button>
);
Button.propTypes = buttonPropTypes;
export const SecondaryButton = ({title, clickHandler}) => (
    <Button clickHandler={clickHandler} title={title} textColor='#1E365C' backgroundColor='#eeeeee'/>
);
SecondaryButton.propTypes = buttonPropTypes;

export const PrimaryButton = ({title, clickHandler}) => (
    <Button clickHandler={clickHandler} title={title} textColor='#fff' backgroundColor='#207ce5'/>
);
PrimaryButton.propTypes = buttonPropTypes;