import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // Fetch products from an API
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({ products: response.data });
    });
  }

  render() {
    const { user, addToCart } = this.props;
    const { products } = this.state;

    return (
      <div>
        <h2>Welcome, {user ? user.name : "Guest"}!</h2>
        <h3>Products</h3>
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

export default HomePage;
