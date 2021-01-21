import React from 'react';

function ETA(props) {
  return (
    <div>
      <div id="deliveryTime">deliveryTime: {props.deliveryTime} days</div>
      <div id="shipTime">shipTime: {props.shipTime} days</div>
    </div>
  );
}

export default ETA;