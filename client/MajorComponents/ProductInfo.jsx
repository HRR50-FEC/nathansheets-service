import React from 'react';
import ProductHighlights from './ProductInfoComponents/ProductHighlights.jsx';
import ProductDescription from './ProductInfoComponents/ProductDescription.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hightlightStatus : 'notCollapsed',
      descriptionStatus : 'notCollapsed',
      highlightArrow : 'arrowNotFlipped',
      descriptionArrow : 'arrowNotFlipped'
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
    }
  }

  render() {
    return(
      <div>
        <ProductHighlights highlights={this.props.listing.itemHighlights} cName={this.state.hightlightStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.highlightArrow}/>
        <ProductDescription description={this.props.listing.itemDescription} cName={this.state.descriptionStatus} toggle={this.toggleCollapsed.bind(this)} arrow={this.state.descriptionArrow}/>
      </div>
    );
  };
}

export default ProductInfo;