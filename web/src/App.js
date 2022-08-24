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
import AddProduct from './AddProduct';
import HomePage from './HomePage';
import Login from './LoginUi';
import NavComponent from './components/NavComponent';

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
              </Route>
              <Route path="product">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


/*
<Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="signup" element={<Signup />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              
              <Route path="product">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
            */