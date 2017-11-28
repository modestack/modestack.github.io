import React from 'react';
import styles from './nav.module.scss';
import MenuIcon from '../../components/icons/menu-icon';

const {Component} = React;

const Nav = ({mobileExpandHandler, isMobileMenuExpanded}) => {
    const icon = isMobileMenuExpanded ? <div>x</div> : <MenuIcon/>;
    let inlineStyes;
    if (isMobileMenuExpanded) {
        inlineStyes = {
            display: 'flex'
        };
    }
    return (
        <nav className={styles.nav}>
            <ul style={inlineStyes}>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className={styles.closeIcon} onClick={mobileExpandHandler}>
                {icon}
            </div>
        </nav>
    )
};

export default Nav;