import React from 'react';
import styles from './services-summary.module.scss';
import Circle from '../../components/icons/circle';

const ServiceTitle = ({title, color}) => (
  <div className={styles.summaryItemHeader}>
    <div className={styles.icon}>
      <Circle fillColor={color}/>
    </div>
    <h2>{title}</h2>
  </div>
);

export const ServicesSummary = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#C2F0DC' title='Accessibility Audit'/>
        <p>Modestack will take care of everything to ensure your digital assets are compliant with existing accessibility regulations.
          We will also support development teams in ensuring all future work is compliant</p>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#FBC33D' title='Performance Analysis'/>
        <p>
          Performance is crucial for converting leads into sales. Work with the experts in order to gain an edge in your engagements with customers.
        </p>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#43b7e7' title='Web Development'/>
        <p>
          Modestack uses the latest technology and tools to build the best and fastest websites.
        </p>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#F0405E' title='Cross Platform Apps'/>
        <p>
          Modestack will help you implement your idea across all platforms.
        </p>
      </div>
    </div>
  )
};