import React from 'react'
import PrimaryLink from '../components/common/links/primaryLink/primaryLink';
import Button from '../components/button';
import Subscription from '../components/subscription/subscription';

const IndexPage = () => (
    <div>
        <Subscription/>
        <div className="c-card c-card-corner">
            <h2>Increase User Engagement</h2>
            <p>Modestack will help you increase user engagement by accelerating your website.</p>
            <p>Find out soon.</p>
            <PrimaryLink title="Contact Us" link="mailto:info@modestack.co"/>
        </div>
    </div>
)

export default IndexPage;
