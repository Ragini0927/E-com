import React, { Component } from "react";
import axios from "axios";

class SearchPage extends Component {
  state = {
    searchQuery: "",
    products: [],
  };

  handleSearch = () => {
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      const filteredProducts = response.data.filter((product) =>
        product.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
      this.setState({ products: filteredProducts });
    });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { products } = this.state;
    const { addToCart } = this.props;

    return (
      <div>
        <h2>Search Products</h2>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchPage;
