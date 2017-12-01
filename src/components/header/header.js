import React from 'react';
import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import styles from './header.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.expandMobileMenu = this.expandMobileMenu.bind(this);
        this.state = {
            isMobileMenuExpanded: false
        }
    }
    render() {
        let inlineStyles = {};
        const {isMobileMenuExpanded} = this.state;
        if (isMobileMenuExpanded) {
            inlineStyles = {
                height: '100vh'
            };
        }
        return (
            <div style={inlineStyles} className={styles.header}>
                <div className={styles.headerContent}>
                    <Logo overrideLettersColor='#fff'/>
                    <Nav isMobileMenuExpanded={isMobileMenuExpanded} mobileExpandHandler={this.expandMobileMenu}/>
                </div>
            </div>
        );
    }
    expandMobileMenu() {
        const {isMobileMenuExpanded} = this.state;
        this.setState({isMobileMenuExpanded: !isMobileMenuExpanded});
    }

}

export default Header;