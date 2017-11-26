import React from 'react';
import styles from './nav.module.scss';

const Nav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </nav>
);

export default Nav;