import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ user, addToCart, removeFromCart, cart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleLogout = () => {
    navigate('/logout');
  };

  // Filtered products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <Header user={user} handleLogout={handleLogout} />

      <div className="container">
        {/* Search Bar */}
        <div className="row my-4">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Product List */}
        <div className="row">
          {filteredProducts.map(product => (
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
