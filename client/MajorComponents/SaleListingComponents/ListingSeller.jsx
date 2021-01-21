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
        {props.ItemSeller.sellerName}
      </div>
      <div id="ListingSellerSales">
          {props.totalSales} sales | {generateStars(props.averageRating)}
        </div>
    </div>
  );
}

export default ListingSeller;