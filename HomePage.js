import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ user, addToCart, removeFromCart, cart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleLogout = () => {
    // Clear user session or token logic
    navigate('/logout');
  };

  return (
    <div>
      {/* Header */}
      <Header user={user} handleLogout={handleLogout} />

      <div className="container">
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
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductList;
