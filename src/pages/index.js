import React from 'react';
import {appFlags} from '../../gatsby-config';
import {PrimaryLink} from '../components/common/link/link';
import Button from '../components/button';
import Subscription from '../components/subscription/subscription';
import Hero from '../components/hero/hero';
import Card from '../components/card/card';

const {isSubscriptionBoxEnabled} = appFlags;
const removeSubscription = () => {
    console.log('removing subscription');
};
class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.closeSubscription = this.closeSubscription.bind(this);
        this.state = {
            showSubscriptionBox: isSubscriptionBoxEnabled
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
            </div>
        )
    }
}

export default IndexPage;
