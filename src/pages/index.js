import React from 'react'
import {PrimaryLink} from '../components/common/links/link';
import Button from '../components/button';
import Subscription from '../components/subscription/subscription';

const removeSubscription = () => {
    console.log('removing subscription');
};

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.closeSubscription = this.closeSubscription.bind(this);
        this.state = {
            showSubscriptionBox: true
        }
    }
    closeSubscription() {
        this.setState({
            showSubscriptionBox: false
        });
    }
    render() {
        const subscription = this.state.showSubscriptionBox ? <Subscription removeSubscriptionBox={this.closeSubscription}/> : null;
        return (
            <div>
                {subscription}
                <div className="c-card c-card-corner">
                    <h2>Increase User Engagement</h2>
                    <p>Modestack will help you increase user engagement by accelerating your website.</p>
                    <p>Find out soon.</p>
                    <PrimaryLink title="Contact Us" link="mailto:info@modestack.co"/>
                </div>
            </div>
        )
    }
}

export default IndexPage;
