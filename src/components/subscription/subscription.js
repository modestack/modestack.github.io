import React from 'react';
import styles from './subscription.module.scss';
import BadgeIcon from '../icons/airplane-badge';
import SecondaryLink from '../common/links/secondaryLink/secondaryLink';
import closeIconSVG from '../../assets/svgs/ic_close_white_24px.svg';

const Subscription = () => (
    <div className={styles.subscription}>
        <div className={styles.topSection}>
        <span>
            <h3 className={styles.header}>Subscribe today</h3>
        <p>By subscribing to our weekly newsletter you will get the latest resources to improve user engagement of your website </p>
        </span>
            <div className={styles.badgeContainer}>
                <img style={{
                    margin: '0',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    cursor: 'pointer',
                    padding: '10px',
                }} src={closeIconSVG} alt=""/>
                <div>
                    <BadgeIcon/>
                </div>
            </div>
        </div>
        <div className={styles.navigation}>
            <span>
                <input style={{height: '100%'}} type="text"/>
            </span>
            <span>
                <SecondaryLink link="#" title="Subscribe"/>
            </span>

        </div>

    </div>
);

export default Subscription;