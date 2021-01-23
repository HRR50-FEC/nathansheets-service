import React from 'react';
import ETA from './ShippingComponents/ETA.jsx';
import MeetYourSeller from './ShippingComponents/MeetYourSeller.jsx';

class ShippingInfo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      shippingStatus : 'notCollapsed',
      arrowStatus : 'arrowNotFlipped'
    }
  };

  renderItemSeller() {
    if (this.props.listing.ItemSeller) {
      return(
        < MeetYourSeller ItemSeller={this.props.listing.ItemSeller} averageRating={this.props.listing.averageRating} totalSales={this.props.listing.totalSales}/>
      );
    }
  }

  toggleCollapsed() {
    var status = this.state.shippingStatus === 'notCollapsed' ? 'collapsed' : 'notCollapsed';
    var arrow = this.state.arrowStatus === 'arrowNotFlipped' ? 'arrowFlipped' : 'arrowNotFlipped';
    this.setState({
      shippingStatus : status,
      arrowStatus : arrow
    });
  }

  render() {
    return(
      <div>
        <ETA shipTime={this.props.listing.shipTime} deliveryTime={this.props.listing.deliveryTime} cName={this.state.shippingStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.arrowStatus}/>
        {this.renderItemSeller()}
      </div>
    );
  };
}

export default ShippingInfo;