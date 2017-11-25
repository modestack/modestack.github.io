import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Logo from '../components/logo/logo';

import '../styles/app.scss';

const Header = () => (
    <div
        style={{
            padding: '1rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            textAlign: 'left'
        }}
    >
        <Logo overrideLettersColor='#fff'/>
    </div>

)

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Increase user engagement by accelerating your website"
            meta={[
                {name: 'description', content: 'Modestack will help your increase user engagement by accelerating your website'},
                {name: 'keywords', content: 'user experience, search engine optimization, web performance optimization, accessibility, ux, wpo, webperf'}/*,
                {name: 'robots', content: 'noindex'}*/
            ]}
        />
        <Header/>

        <div className="content">
            <div
                style={{
                    margin: '0 auto',
                    // maxWidth: 960,
                    paddingTop: 0,
                }}
            >
                {children()}
            </div>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
