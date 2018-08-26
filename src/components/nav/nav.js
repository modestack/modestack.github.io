import React from 'react';
import styles from './nav.module.scss';
import MenuIcon from '../../components/icons/menu-icon';
import CloseIcon from '../../components/icons/close-icon';

const Nav = ({mobileExpandHandler, isMobileMenuExpanded}) => {
    const icon = isMobileMenuExpanded ? <CloseIcon /> : <MenuIcon/>;
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
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Team</a>
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