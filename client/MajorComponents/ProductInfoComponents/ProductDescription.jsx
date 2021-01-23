import React from 'react';

function ProductDescription(props) {

  return (
    <div id="descriptionContainer">
      <div className='descriptionHeader' onClick={props.toggle.bind(null, 'description')}>
        Description
        <img className={props.arrow} src="https://fecuiicons.s3.amazonaws.com/arrow-up-01-512.webp"></img>
      </div>
      <div className={props.cName} id="description">
        {props.description}
      </div>
    </div>
  );
}

export default ProductDescription;