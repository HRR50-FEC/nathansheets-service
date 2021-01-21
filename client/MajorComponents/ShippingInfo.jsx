import React from 'react';
import ETA from './ShippingComponents/ETA.jsx';
import MeetYourSeller from './ShippingComponents/MeetYourSeller.jsx';

class ShippingInfo extends React.Component {
  constructor (props) {
    super(props);
  };

  renderItemSeller() {
    if (this.props.listing.ItemSeller) {
      return(
        < MeetYourSeller ItemSeller={this.props.listing.ItemSeller} averageRating={this.props.listing.averageRating} totalSales={this.props.listing.totalSales}/>
      );
    }
  }

  render() {
    return(
      <div>
        <ETA shipTime={this.props.listing.shipTime} deliveryTime={this.props.listing.deliveryTime}/>
        {this.renderItemSeller()}
      </div>
    );
  };
}

export default ShippingInfo;