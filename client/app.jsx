import React from 'react';
import axios from 'axios';

import SaleListing from './MajorComponents/SaleListing.jsx';
import ProductInfo from './MajorComponents/ProductInfo.jsx';
import ShippingInfo from './MajorComponents/ShippingInfo.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      listing: {}
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3000/listing')
    .then (x => {
      console.log(x);
      this.setState({
        listing: x.data
      });
    })
  }

  render() {
    return (
      <div id="descriptionBar">
        < SaleListing listing={this.state.listing}/>
        < ProductInfo listing={this.state.listing}/>
        < ShippingInfo listing={this.state.listing}/>
      </div>
    );
  };
}

export default App;