import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ETA(props) {
  function getDateRange() {
    var todayDate = new Date();
    var earlyRange = todayDate.addDays(-2 - props.deliveryTime - props.shipTime);
    var lateRange = todayDate.addDays(2 + props.deliveryTime + props.shipTime);

    let x = months[earlyRange.getMonth()] + ' ' + (earlyRange.getDate() - 2).toString();
    let y = months[lateRange.getMonth()] + ' ' + (earlyRange.getDate() + 2).toString();

    return (x + '-' + y);
  };

  return (
    <div>
      <div id="shippingTitle">
        Shipping and return policies
      </div>
      <div id="estimatedArrivalLabel">
        <a href="">Estimated arrival</a>
      </div>
      <div id="estimatedArrival">
        {getDateRange()}
      </div>
      <div id="deliveryTime">deliveryTime: {props.deliveryTime} days</div>
      <div id="shipTime">shipTime: {props.shipTime} days</div>
    </div>
  );
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export default ETA;