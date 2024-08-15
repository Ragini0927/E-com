import React, { Component } from "react";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.handleLogout();
  }

  render() {
    return (
      <div>
        <h2>You have been logged out</h2>
      </div>
    );
  }
}

export default LogoutPage;
