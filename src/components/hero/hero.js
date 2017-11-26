import React from 'react';
import styles from './_hero.module.scss';
import {Link} from "../common/link/link";

const Hero = () => {
    return (
        <div>
            <div className={styles.skewedBackground}></div>
            <div className={styles.introContainer}>
                <div className={styles.tagline}>
                    <h1>Modstack will make your site blazingly fast</h1>
                    <p>Modstack will help you increase user engagement by accelerating your website.

                        Find out soon.</p>
                </div>
                <Link  title='Contact us' link='mailto:info@modestack.co' backgroundColor='#fff' textColor='#207CE5'/>
            </div>

        </div>
    )
};

export default Hero;