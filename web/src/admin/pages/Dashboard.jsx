import React, { Component } from 'react';
import Navbar from './../components/navbar';
import Sidebar from './../components/sidebar';
import Cardview from '../components/cardview';
import './../../styles/dashboard.scss';

export default class Home extends Component {
  render() {  

    return (
      <div class = "dashboard">
        <Sidebar/>
        <div className="dashboardContainer">
          <Navbar/>
            <div className="cardviews">
                <Cardview type = "user" count = {12}/>
                <Cardview type = "products" count = {14}/>
                <Cardview type = "orders" count = {23}/>                
            </div>
        </div>
      </div>
    )
  }
}
