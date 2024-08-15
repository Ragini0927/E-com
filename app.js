import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/login">
            <LoginPage handleLogin={this.handleLogin} />
          </Route>
          <Route path="/logout">
            <LogoutPage handleLogout={this.handleLogout} />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/cart">
            <CartPage cart={cart} />
          </Route>
          <Route path="/search">
            <SearchPage addToCart={this.addToCart} />
          </Route>
          <Route path="/">
            <HomePage user={user} addToCart={this.addToCart} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
