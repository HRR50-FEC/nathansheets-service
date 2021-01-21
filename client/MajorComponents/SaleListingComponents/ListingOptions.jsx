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
              <select name={x.name} key={x.name} className="optionDropdown">
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
      </div>
    );
  }
}

export default ListingOptions;