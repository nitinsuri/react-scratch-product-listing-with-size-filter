import React, { Component } from "react";
import axios from 'axios';
import ProductTile from '../ProductTile/ProductTile';

class ProductListing extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://gist.githubusercontent.com/nitinsuri/369461bf222c6a0267d156d822359a4c/raw/ec8f5b2b2af66dc2beba5eb827ca1c9021c371f3/products.json`)
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products });
      },
        error => { console.log(error) });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="product-grid">
          {this.state.products.map(product => <ProductTile key={product.index} productData={product} />)}
        </section>
      </React.Fragment>
    );
  }
}

export default ProductListing;