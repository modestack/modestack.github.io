import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/button';
import Subscription from '../components/subscription/subscription';

const IndexPage = () => (
    <div>
        <Subscription/>
        <div className="c-card c-card-corner">
            <h2>Increase User Engagement</h2>
            <p>Modestack will help you increase user engagement by accelerating your website.</p>
            <p>Find out soon.</p>
            <Button link="mailto:info@modestack.co" title="Contact Us"/>
        </div>
    </div>
)

export default IndexPage
