import React from 'react';
import styles from './nav.module.scss';
import MenuIcon from '../../components/icons/menu-icon';

const Nav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className={styles.closeIcon}>
            <MenuIcon />
        </div>

    </nav>
);

export default Nav;