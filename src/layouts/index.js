import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Logo from '../components/logo';

import './index.css'

const Header = () => (
    <div
        style={{
            padding: '1rem',
            borderBottom: '1px solid #eee'
        }}
    >
        <Logo/>
    </div>

)

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                {name: 'description', content: 'Sample'},
                {name: 'keywords', content: 'sample, something'},
            ]}
        />
        <Header/>

        <div className="content">
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
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
