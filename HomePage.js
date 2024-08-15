import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCart from './ProductCart';

function ProductList({ addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container" >
      <h2>E-commerce</h2>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <div style={{float: "right "}} >Welcome, User</div>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={<ProductCart cart={cart}></ProductCart>}>Cart
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
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
  );
}

export default ProductList;
