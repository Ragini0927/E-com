import React, { Component } from "react";

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle user registration (could integrate with an API)
    alert("Registered successfully!");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
