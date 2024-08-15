import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, handleLogout }) {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">E-commerce</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {user ? (
                <>
                  <li className="nav-item">
                    <span className="navbar-text">Welcome, {user.name}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-danger ml-2" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="btn btn-outline-primary ml-2" to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

