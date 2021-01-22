import React from 'react';

function ProductDescription(props) {
  return (
    <div id="descriptionContainer">
      <div id="descriptionTitle">
        Description
      </div>
      <div id="description">
        {props.description}
      </div>
    </div>
  );
}

export default ProductDescription;