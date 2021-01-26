import React from 'react';
import ProductHighlights from './ProductInfoComponents/ProductHighlights.jsx';
import ProductDescription from './ProductInfoComponents/ProductDescription.jsx';
import ETA from './ProductInfoComponents/ETA.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hightlightStatus : 'notCollapsed',
      descriptionStatus : 'notCollapsed',
      shippingStatus: 'notCollapsed',
      highlightArrow : 'arrowNotFlipped',
      descriptionArrow : 'arrowNotFlipped',
      shippingArrow: 'arrowNotFlipped'
    }
  };

  toggleCollapsed(moduleName) {
    switch (moduleName) {
      case 'highlights':
        var status = this.state.hightlightStatus === 'notCollapsed' ? 'collapsed' : 'notCollapsed';
        var arrow = this.state.highlightArrow === 'arrowNotFlipped' ? 'arrowFlipped' : 'arrowNotFlipped';
        this.setState({
          hightlightStatus : status,
          highlightArrow : arrow
        });
      break;

      case 'description':
        var status = this.state.descriptionStatus === 'notCollapsed' ? 'collapsed' : 'notCollapsed';
        var arrow = this.state.descriptionArrow === 'arrowNotFlipped' ? 'arrowFlipped' : 'arrowNotFlipped';
        this.setState({
          descriptionStatus : status,
          descriptionArrow : arrow
        });
      break;

      case 'shipping':
        var status = this.state.shippingStatus === 'notCollapsed' ? 'collapsed' : 'notCollapsed';
        var arrow = this.state.shippingArrow === 'arrowNotFlipped' ? 'arrowFlipped' : 'arrowNotFlipped';
        this.setState({
          shippingStatus : status,
          shippingArrow : arrow
        });
      break;
    }
  }

  render() {
    return(
      <div>
        <ProductHighlights highlights={this.props.listing.itemHighlights} cName={this.state.hightlightStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.highlightArrow}/>
        <ProductDescription description={this.props.listing.itemDescription} cName={this.state.descriptionStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.descriptionArrow}/>
        <ETA shipTime={this.props.listing.shipTime} deliveryTime={this.props.listing.deliveryTime} cName={this.state.shippingStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.shippingArrow}/>
      </div>
    );
  };
}

export default ProductInfo;