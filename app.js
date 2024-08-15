import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import P1 from './P1.js';
import PeopleList from './PeopleList.js';
import Image from './Image.js';
import Component from './Component.js';
import Component01 from './Component01.js';
import Component02 from './Component02.js';
import Component04 from './Component04.js';
import ProductList from './ProductList.jsx';
import ProductCart from './ProductCart.js';
import Fruits from './Fruits.jsx';
import Timer from './Timer.jsx';
import NewEmployee from './NewEmployee.js';
import EmployeeList from './EmployeeList.jsx';
import Form from './HooksDemo.js';
import Routing from './Routing.jsx';
import {BrowserRouter as Router, Route,Routes,Link,Outlet} from 'react-router-dom';
import Login from './Login.js';
import ContextApiEx02 from './ContextAPIex02.jsx';
import ContextApiEx03 from './ContextAPIex03.jsx';

function App(){

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div>
      {/* <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} /> */}
      {/* <Fruits addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />  */}
      {/* <Timer/>  */}
      {/* <Form/> 
       <EmployeeList/>*/}
      {/* <Routing/>  */}
      <Router>
            <Routes>
                <Route  path="/" element={<Login/>}></Route>
                <Route  path="/ProductList" element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}></ProductList>}></Route>
                {/* <Route  path="/ProductCart" element={<ProductCart cart={cart}  ></ProductCart>}></Route>  */}
                
             </Routes>
       </Router>
      <ProductCart cart={cart} /> 
      {/* <ContextApiEx02/>
      <ContextApiEx03/> */}
    </div>
   )
  }
export default App;

