import React, { Component } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShareIcon from "@mui/icons-material/Share";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Link } from "react-router-dom";
import "./../../styles/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class sidebar extends Component {
  render() {
    return (
      <div className="col-auto col-xl-2 col-md-3 px-sm-2 min-vh-100 sidebar">
       
        <ul className="sidebarContent" style={{ marginTop: "20px" }}>

          <li className="sidebarContentItem">
            <Link to={"../customer"} className="sidebar-link px-2">
              <AccountCircleOutlinedIcon />
              <span className="ms-1 d-none d-sm-inline ms-3">Customers</span>
            </Link>
          </li>
          <li className="sidebarContentItem">
            <Link to={"../category"} className="sidebar-link px-2">
              <ListAltIcon />
              <span className="ms-1 d-none d-sm-inline  ms-3">Categories</span>
            </Link>
          </li>
          <li className="sidebarContentItem">
            <Link to={"../ProductList"} className="sidebar-link px-2">
              <InventoryIcon />
              <span className="ms-1 d-none d-sm-inline  ms-3">Products</span>
            </Link>
          </li>
          <li className="sidebarContentItem">
            <Link to={"../order"} className="sidebar-link px-2">
              <ShoppingCartIcon />
              <span className="ms-1 d-none d-sm-inline  ms-3">Orders</span>
            </Link>
          </li>
          <li className="sidebarContentItem">
            <Link to={"../add-product"} className="sidebar-link px-2">
            <AddCircleOutlineIcon />
              <span className="ms-1 d-none d-sm-inline ms-3">Add Product</span>
            </Link>
          </li>
          <li className="sidebarContentItem">
            <Link to={"/SignOut"} className="sidebar-link px-2">
            <LogoutIcon />
              <span className="ms-1 d-none d-sm-inline  ms-3">Logout</span>
            </Link>
          </li>
          
        </ul>
      </div>
    );
  }
}


export default sidebar;