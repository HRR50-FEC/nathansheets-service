import React from 'react';
import ListingOptions from './ListingOptions.jsx';

function ListingFinancial(props) {
  function isLowInStock(stockLeft) {
    if (stockLeft < 10) {
      return 'Low in stock';
    }
  }
  return (
    <div id="ListingFinancialContainer">
      <div id="ListingItemName">
        {props.itemName}
      </div>
      <div id="PriceContainer">
        <div id="ListingItemPrice">
          ${props.itemPrice}.00+
        </div>
        <div id="ListingStockLeft">
          {isLowInStock(props.stockLeft)}
        </div>
      </div>
      <div id="klarnaFinancing">
        Pay as low as <u><a href=''>{Math.floor(props.itemPrice / 12)}/mo.</a></u> with <b>Klarna</b>.<br></br>
        <u><a href="">See if you're prequalified.</a></u>
      </div>
      <div id="ListingOptions">
        <ListingOptions options={props.options} stockLeft={props.stockLeft}/>
      </div>
    </div>
  );
}

export default ListingFinancial;