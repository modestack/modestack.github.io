import React from 'react';
import styles from './services-summary.module.scss';
import Circle from '../../components/icons/circle';
import { SecondaryLink } from "../common/link/link";

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
        <p>Modestack will ensure your web assets are compliant with existing accessibility regulations.</p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#FBC33D' title='Performance Analysis'/>
        <p>
          Performance is crucial for converting leads into sales. Modestack can help you beat the competition.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#43b7e7' title='Web Development'/>
        <p>
          Modestack uses the latest technology and tools to build the best and fastest websites.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
      <div className={styles.summaryItem}>
        <ServiceTitle color='#F0405E' title='Cross Platform Apps'/>
        <p>
          Modestack will help you implement your idea across all platforms.
        </p>
        <div>
          <SecondaryLink title='Read More'/>
        </div>
      </div>
    </div>
  )
};