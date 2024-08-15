import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ user, addToCart, removeFromCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Left side for displaying user name */}
        <div className="col-md-2">
          <h4>Welcome, {user ? user.name : 'Guest'}</h4>
        </div>

        {/* Right side for product list */}
        <div className="col-md-10">
          <h2>E-commerce</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row mt-2">
            {products.map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name} 
                    style={{ height: '200px', objectFit: 'fit' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button 
                      className="btn btn-primary mr-2" 
                      onClick={() => addToCart(product)}>
                      Add
                    </button>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => removeFromCart(product)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
