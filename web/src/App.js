import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './admin/pages/Dashboard';
import List from './admin/pages/List';
import New from './admin/pages/New';
import Single from './admin/pages/Single';
import Product from './Product';
import Signup from './Signup';
import Signout from './Signout';
import AddProduct from './AddProduct';
import HomePage from './HomePage';
import Login from './LoginUi';
import NavComponent from './components/Navbar';
import CategoryList from './admin/pages/CategoryList';
import Collection from './Collection';
import Cart from './Cart';
import CustomerList from './admin/pages/CustomerList';
import AboutUs from './AboutUs';
import OrderList from './admin/pages/OrderList';
import ProductList from './admin/pages/ProductList';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="Signup" element={<Signup />} />
              <Route path='Login' element={<Login />} />
              <Route path="admin">
                <Route index element={<Dashboard />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="category" element={<CategoryList />} />
                <Route path="customer" element={<CustomerList />} />
                <Route path="order" element={<OrderList />} />
                <Route path="ProductList" element={<ProductList />} />
              </Route>
              <Route path="product/:id" element={<Product />} />
              <Route path="collection/:id" element={<Collection />} />
              <Route path="cart" element={<Cart />} />
              <Route path="AboutUs" element={<AboutUs />} />
              <Route path='Signout' element={<Signout />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

