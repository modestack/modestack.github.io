import React from 'react';
import styles from './_hero.module.scss';
import { Link, SecondaryLink } from "../common/link/link";
import Arrows from '../../components/banners/arrows';

const Hero = () => {
  return (
    <div>
      <Arrows/>
      <div className={styles.introContainer}>
        <div className={styles.tagline}>
          <h1>We make super engaging digital experiences</h1>
          <p>Modestack will help you increase user engagement by accelerating your websites and apps.</p>
        </div>
        <Link title='Contact us' link='mailto:info@modestack.co'/>
      </div>

    </div>
  )
};

export default Hero;