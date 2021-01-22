import React from 'react';
import ListingSeller from './SaleListingComponents/ListingSeller.jsx';
import ListingFinancial from './SaleListingComponents/ListingFinancial.jsx';

class SaleListing extends React.Component {
  constructor (props) {
    super(props);
  };

  renderItemSeller() {
    if (this.props.listing.ItemSeller) {
      return(
        < ListingSeller ItemSeller={this.props.listing.ItemSeller} averageRating={this.props.listing.averageRating}
        totalSales={this.props.listing.totalSales}/>
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderItemSeller()}
        < ListingFinancial itemPrice={this.props.listing.itemPrice} stockLeft={this.props.listing.stockLeft} options={this.props.listing.options} itemName={this.props.listing.itemName}/>
      </div>
    );
  };
}

export default SaleListing;