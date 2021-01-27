import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ETA(props) {
  function getDeliveryDateRange() {
    var todayDate = new Date();
    var earlyRange = todayDate.addDays(props.deliveryTime + props.shipTime);
    var lateRange = todayDate.addDays(2 + props.deliveryTime + props.shipTime);
    let subtractionAmount = earlyRange.getDate() > 2 ? 2 : 0;
    let x = months[earlyRange.getMonth()] + ' ' + (earlyRange.getDate() - subtractionAmount).toString();
    let y = months[lateRange.getMonth()] + ' ' + (earlyRange.getDate() + 2).toString();

    return (x + '-' + y);
  };

  function getTodayFormatted(daysToAdd) {
    var todayDate = new Date();
    daysToAdd ? todayDate = todayDate.addDays(daysToAdd): null;
    return (months[todayDate.getMonth()] + ' ' + todayDate.getDate().toString());
  }

  return (
    <div id="shippingContainer">
      <div className="descriptionHeader" onClick={props.toggle.bind(null, 'shipping')}>
        Shipping and return policies
        <img className={props.arrow} src="https://fecuiicons.s3.amazonaws.com/arrow-up-01-512.webp"></img>
      </div>
      <div className={props.cName} id="shipping">
        <div id="estimatedArrivalLabel">
          <a id="estimatedArrivalText" href="">Estimated arrival</a>
          <div id="etaPopup" className="popup">
            The estimated delivery date is based on your purchase date, the recipient's location (actual or inferred), the seller's processing time and location, and the shipping carrier.
            <br></br><br></br>
            Other factors—such as shipping carrier delays or placing an order on weekend/holiday—may push the arrival of your item beyond this date.
          </div>
        </div>
        <div id="estimatedArrival">
          {getDeliveryDateRange()}
        </div>
        <div id="etaGraphicContainer">
          <div className="etaGraphic">
            <img className="etaIcons" src="https://fecuiicons.s3.amazonaws.com/Sample+Pics+For+FEC/hand.png"></img>
            <div className="line"></div>
            <img className="etaIcons" src="https://fecuiicons.s3.amazonaws.com/truck-icon-9018.png"></img>
            <div className="line"></div>
            <img className="etaIcons" src="https://fecuiicons.s3.amazonaws.com/gift-outline.png"></img>
          </div>
          <div className="etaGraphic">
            <div className="etaGraphicDates">
              {getTodayFormatted()}
            </div>
            <div className="etaGraphicDates">
              {getTodayFormatted(props.shipTime)}
            </div>
            <div className="etaGraphicDates">
              {getTodayFormatted(props.shipTime + props.deliveryTime)}
            </div>
          </div>
          <div className="etaGraphic">
            <div className="etaGraphicText">
              <a className="etaGraphicLinks" id="orderPlaced" href="">Order placed</a>
              <div id="orderPlacedPopup" className="popup">After you place your order it will take {props.shipTime - 2}-{props.shipTime + 2} days to be shipped.</div>
            </div>
            <div className="etaGraphicText">
              <a className="etaGraphicLinks" id="orderShips" href="">Order ships</a>
              <div id="orderShipsPopup" className="popup">Your order is put in the mail.</div>
            </div>
            <div className="etaGraphicText">
              <a className="etaGraphicLinks" id="orderDelivered" href="">Delivered!</a>
              <div id="orderDeliveredPopup" className="popup">Estimated to arrive at your doorstep {getTodayFormatted(props.shipTime + props.deliveryTime)}!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export default ETA;