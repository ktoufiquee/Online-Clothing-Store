import React, { Component } from 'react';
import "./../../styles/navbar.scss";
import SearchIcon from '@mui/icons-material/Search';

export default class navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" name="" id="" placeholder="Search..."/>
            <SearchIcon/>
          </div>
          <div className="items">                     
            <div className="item">
                <img
                src="https://nypost.com/wp-content/uploads/sites/2/2022/06/chris-evans-4.jpg" 
                alt=""
                className = "avatar" />
            </div>
            <div className="item">
              Hello,admin      
            </div>  
          </div>
        </div>
      </div>
    )
  }
}
