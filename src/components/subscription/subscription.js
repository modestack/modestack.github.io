import React from 'react';
import PropTypes from 'prop-types';
import styles from './subscription.module.scss';
import BadgeIcon from '../icons/airplane-badge';
import {SecondaryButton, SecondaryLink} from '../common/link/link';
import CloseIcon from '../../components/icons/close-icon';

class Subscription extends React.Component {
  render() {
      const {removeSubscriptionBox} = this.props;
      return (
          <div className={styles.subscription}>
              <div className={styles.topSection}>
        <span>
            <h3 className={styles.header}>Subscribe today</h3>
        <p>By subscribing to our weekly newsletter you will get the latest resources to improve user engagement of your website </p>
        </span>
                  <div className={styles.badgeContainer} onClick={removeSubscriptionBox}>
                      <div style={{
                          margin: '0',
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          cursor: 'pointer',
                          padding: '10px',
                      }}>
                          <CloseIcon />
                      </div>
                      <div>
                          <BadgeIcon/>
                      </div>
                  </div>
              </div>
              <div className={styles.navigation}>
            <span>
                <input style={{height: '100%'}} type="text"/>
            </span>
                  <span>
                      <SecondaryButton clickHandler={this.subscribe} title="Subscribe" />
            </span>

              </div>

          </div>
      );
  }
  subscribe() {
      console.log('subscribing');
  }
}

Subscription.propTypes = {
    removeSubscriptionBox: PropTypes.func
};
export default Subscription;