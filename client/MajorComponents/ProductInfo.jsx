import React from 'react';
import ProductHighlights from './ProductInfoComponents/ProductHighlights.jsx';
import ProductDescription from './ProductInfoComponents/ProductDescription.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);
  };

  render() {
    return(
      <div>
        <ProductHighlights hightlights={this.props.listing.itemHighlights}/>
        <ProductDescription description={this.props.listing.itemDescription}/>
      </div>
    );
  };
}

export default ProductInfo;