import React from 'react';

function ListingSeller(props) {
  function generateStars(rating) {
    var x = [];
    for (let i = 0; i < rating; i++) {
      x.push(<img className="stars" key={i} src='https://fecuiicons.s3.amazonaws.com/star.png'/>)
    }
    return x;
  }
  return (
    <div id="ListingSellerContainer">
      <div id="ListingSeller">
        <a id="sellerLink" href="">{props.ItemSeller.sellerName}</a>
      </div>
      <div id="ListingSellerSales">
          {props.totalSales} sales | <a href="">{generateStars(props.averageRating)}</a>
        </div>
    </div>
  );
}

export default ListingSeller;