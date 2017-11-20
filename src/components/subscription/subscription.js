import React from 'react';
import styles from './subscription.module.scss';
import BadgeIcon from '../icons/airplane-badge';

const Subscription = () => (
    <div className={styles.subscription}>
        <div className={styles.header}>Coming Soon</div>
        <div>
            <BadgeIcon/>
        </div>
    </div>
);

export default Subscription;