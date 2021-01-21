import React from 'react';

function ProductHighlights(props) {
  return (
    <div id="highlightsContainer">
      <div id="highlightsTitle">
        <h2>Highlights</h2>
      </div>
      <div>
        {props.hightlights}
      </div>
    </div>
  );
}

export default ProductHighlights;