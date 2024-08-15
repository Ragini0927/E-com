import React, { Component } from "react";

class CartPage extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default CartPage;
