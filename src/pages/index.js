import React from 'react';
import config from '../../site-config';
import Subscription from '../components/subscription/subscription';
import Hero from '../components/hero/hero';
import {ServicesSummary} from '../components/services-summary/index';


const removeSubscription = () => {
    console.log('removing subscription');
};
class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.closeSubscription = this.closeSubscription.bind(this);
        this.state = {
            showSubscriptionBox: config.isSubscriptionEnabled
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
                <Hero/>
                {subscription}
                <ServicesSummary></ServicesSummary>
            </div>
        )
    }
}

export default IndexPage;
