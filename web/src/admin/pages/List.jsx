import React, { Component } from 'react';
import Navbar from './../components/navbar';
import Sidebar from './../components/sidebar';
import Datatable from '../components/datatable';
import './../../styles/list.scss';

export default class List extends Component {
  render() {
    return (
      <div className = "list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>   
          <Datatable/>                   
        </div>
      </div>
    )
  }
}


