import React from 'react';
import styles from './services-summary.module.scss';
import { SecondaryLink } from "../common/link/link";
import classNames from 'classnames';

const ServiceTitle = ({title, color, iconName}) => (
  <div className={styles.summaryItemHeader}>
    <div className={styles.icon}>
      <span className={classNames({"material-icons": true, [styles.materialIcon]: true})}>{iconName}</span>
      <span className={styles.circle} style={{backgroundColor: color}}>
      </span>
    </div>
    <h2>{title}</h2>
  </div>
);

export const ServicesSummary = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.summaryItem}>
        <ServiceTitle iconName='accessibility' color='#C2F0DC' title='Accessibility Audit'/>
        <p>Modestack will ensure your web assets are compliant with existing accessibility regulations.</p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle iconName='check_circle' color='#FBC33D' title='Performance Analysis'/>
        <p>
          Performance is crucial for converting leads into sales. Modestack can help you beat the competition.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle iconName='web' color='#43b7e7' title='Web Development'/>
        <p>
          Modestack uses the latest technology and tools to build the best and fastest websites.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle iconName='apps' color='#F0405E' title='Cross Platform Apps'/>
        <p>
          Modestack will help you implement your ideas across all platforms.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
    </div>
  )
};