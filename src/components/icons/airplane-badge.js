import React from 'react';
import badgeSVG from '../../assets/svgs/badge.svg';

const styles = {
    margin: '0',
    minHeight: '100px',
    minWidth: '100px'
};
const AirplaneBadge = () => (
    <img style={styles} src={badgeSVG}/>
);

export default AirplaneBadge;