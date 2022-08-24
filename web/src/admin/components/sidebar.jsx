import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./../../styles/sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShareIcon from '@mui/icons-material/Share';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


export default class sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="top">
          <span className="heading">Online Clothing Store</span>
        </div>

        <div className="center">
          <ul>
            <li style={{ marginTop: "10px" }}>
              <DashboardIcon className="icon" />
              <span>Dashbord</span>
            </li>
            <p className="title">Users</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Customers</span>
            </li>
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Employees</span>
            </li>
            <p className="title">View</p>
            <li>
              <ListAltIcon className="icon" />
              <span>Categories</span>
            </li>
            <li>
              <InventoryIcon className="icon" />
              <span>Products</span>
            </li>
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Orders</span>
            </li>
            <p className="title">Add</p>
            <li>
              <AddIcon className="icon" />
              <span>Add Category</span>
            </li>
            <li>
              <Link to={"../add-product"}>
                <AddCircleOutlineIcon className="icon" />
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <ShareIcon className="icon" />
              <span>Invite Link</span>
            </li>
            <p className="title">Account</p>
            <li>
              <AccountBoxIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}
