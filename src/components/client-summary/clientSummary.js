import React from 'react';
import styles from './clientSummary.module.scss';
import indigoLogo from './logos/indigo.svg';
import cibcLogo from './logos/CIBC_logo.svg';
import equifaxLogo from './logos/equifax.svg';
import tdLogo from './logos/td_logo.svg';

export const ClientSummary = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={indigoLogo} alt="indigo logo"/>
    </div>
    <div className={styles.logo}>
      <img src={cibcLogo} alt="CIBC logo"/>
    </div>
    <div className={styles.logo}>
      <img src={equifaxLogo} alt="Equifax logo"/>
    </div>
    <div className={styles.logo} style={{width: 100}}>
      <img src={tdLogo} alt="TD logo"/>
    </div>
  </div>
);