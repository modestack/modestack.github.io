import React from 'react';

const CircleIcon = ({fillColor = '#C2F0DC', opacity = .5}) => (
  <svg viewBox="0 0 48 48" opacity={opacity} preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
      <circle cx="24" cy="24" r="24" fill={fillColor}></circle>
    </g>
  </svg>
);

export default CircleIcon;