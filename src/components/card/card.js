import React from 'react';
import styles from './card.module.scss';
import {PrimaryLink} from '../common/link/link';

const Card = () => (
    <div className={[styles.card, styles.cardCorner].join(' ')}>
        <h2>Increase User Engagement</h2>
        <p>Modestack will help you increase user engagement by accelerating your website.</p>
        <p>Find out soon.</p>
        <PrimaryLink title="Contact Us" link="mailto:info@modestack.co"/>
    </div>
);

export default Card;