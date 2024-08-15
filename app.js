import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import SearchPage from "./components/SearchPage";

class App extends React.Component {
  state = {
    isAuthenticated: false,
    user: null,
    cart: [],
  };

  handleLogin = (user) => {
    this.setState({ isAuthenticated: true, user });
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false, user: null, cart: [] });
  };

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  render() {
    const { isAuthenticated, user, cart } = this.state;

    return (
      <Router>
        <Routes>
          {/* Routes use the 'element' prop to pass the component as JSX */}
          <Route path="/login" element={<LoginPage handleLogin={this.handleLogin} />} />
          <Route path="/logout" element={<LogoutPage handleLogout={this.handleLogout} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/search" element={<SearchPage addToCart={this.addToCart} />} />
          <Route path="/" element={<HomePage user={user} addToCart={this.addToCart} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
