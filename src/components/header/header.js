import React from 'react';
import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import styles from './header.module.scss';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <Logo overrideLettersColor='#fff'/>
            <Nav/>
        </div>
    </div>
);

export default Header;