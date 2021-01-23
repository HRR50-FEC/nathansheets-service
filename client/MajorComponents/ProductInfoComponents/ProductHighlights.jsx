import React from 'react';

function ProductHighlights(props) {
  function renderHighlights() {
    if (props.highlights) {
      let output = [];
      let hl = JSON.parse(props.highlights);

      if (hl.isHandmade) {
        output.push(
          <div key="highlights" className="highlights">
            <img className="highlightIcon" key="handmadeImg" src="https://fecuiicons.s3.amazonaws.com/Sample+Pics+For+FEC/hand.png"></img>
            <div className="highlightText" key="handmade">Handmade</div>
          </div>
        )
      }

      if (hl.materials) {
        output.push(
          <div key="materials" className="highlights">
            <img className="highlightIcon" key="matImg" src="https://fecuiicons.s3.amazonaws.com/Sample+Pics+For+FEC/cotton.png"></img>
            <div className="highlightText" key="materials">Materials: {hl.materials.join(', ')}</div>
          </div>
        )
      }

      if (hl.dimensions) {
        output.push(
          <div key="dimensions" className="highlights">
            <img className="highlightIcon" key="dimImg" src="https://fecuiicons.s3.amazonaws.com/Sample+Pics+For+FEC/ruler.png"></img>
            <div className="highlightText" key="height">Height: {hl.dimensions.height} centimeters</div>
            <div className="highlightText" key="width">Width: {hl.dimensions.width} centimeters</div>
            <div className="highlightText" key="depth">Depth: {hl.dimensions.depth} centimeters</div>
          </div>
        )
      }

      return output;
    }
  };

  return (
    <div id="highlightsContainer">
      <div className='descriptionHeader' onClick={props.toggle.bind(null, 'highlights')}>
        Highlights
        <img className={props.arrow} src="https://fecuiicons.s3.amazonaws.com/arrow-up-01-512.webp"></img>
      </div>
      <div className={props.cName} id="highlights">
        {renderHighlights()}
      </div>
    </div>
  );
}

export default ProductHighlights;