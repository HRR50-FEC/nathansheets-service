import React from 'react';

class ListingOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions : []
    }
  }

  handleChange(event) {
    this.setState({

    });
  }

  createList() {
    if (this.props.options) {
      var output = [];
      var options = JSON.parse(this.props.options);
      var array = [];
      !Array.isArray(options) ? array.push(options) : array = options;

      array.forEach(x => {
        var inputs = [];
        let i = 0;
        while (x[i]) {
          inputs.push(x[i]);
          i++;
        }
        // console.log(inputs);
        output.push(
          <div className="optionDropdownContainer" key={x.name}>
            <label>{x.name}</label>
              <select name={x.name} key={x.name} className="optionDropdown">
                <option onChange={this.handleChange.bind(this)} key='default'>Select a {x.name}</option>
              {inputs.map(xx =>
                <option value={xx} onChange={this.handleChange.bind(this)} key={xx}>{xx}</option>
              )}
            </select>
          </div>
        );
      });
      return output;
    }
  }

  renderLowStockIcon(numLeft) {
    if (numLeft < 10) {
      return (
        <div>
          <img id="lowStockIcon" src="https://fecuiicons.s3.amazonaws.com/ezgif.com-gif-maker.gif"></img>
          <b>Almost gone.</b> There's only {numLeft} left.
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div id="mainOptionsContainer">
          {this.createList()}
        </div>
        <div id="addToCartContainer">
          <button id="addToCartButton" type="button">Add to cart</button>
        </div>
        <div id="lowStockIconContainer">
          {this.renderLowStockIcon(this.props.stockLeft)}
        </div>
        <div id="giftWrapContainer">
          <img id="giftWrapIcon" src="https://fecuiicons.s3.amazonaws.com/ezgif.com-gif-maker+(1).gif"></img>
          <b>Gift wrapping available.</b> <a id="giftWrapDetails">See details</a>
        </div>
      </div>
    );
  }
}

export default ListingOptions;