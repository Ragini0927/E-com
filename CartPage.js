import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductCart({ cart }) {
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map(product => (
            <li className="list-group-item d-flex justify-content-between lh-condensed" key={product.id}>
              <div>
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
                style={{ height: '200px', objectFit: 'fit' }} 
              />
                <h6 className="my-0">{product.title}</h6>
              </div>
              <span className="text-muted">${product.price}</span>
            </li>
          ))}
         
        </ul>
      )}
      <h4>Total: ${totalAmount}</h4>
      <button className="btn btn-success btn-lg btn-block">Proceed to Payment</button>
    </div>
  );
}

export default ProductCart;
