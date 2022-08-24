import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../styles/cardview.scss";
import { fontSize } from "@mui/system";

export default class widgets extends Component {

  render() {
    let data;    
    switch (this.props.type) {
      case "user":
        data = {
          title: "USERS",
          icon: (
            <AccountCircleOutlinedIcon
              className="icon"             
            />
          ),
          count: this.props.count,
        };
        break;
      case "products":
        data = {
          title: "PRODUCTS",
          icon: (
            <InventoryIcon
              className="icon"             
            />
          ),
          count: this.props.count,
        };
        break;
      case "orders":
        data = {
          title: "ORDERS",
          icon: (
            <ShoppingCartIcon
              className="icon"             
            />
          ),
          count: this.props.count,
        };
        break;
      default:
        break;
    }
    return (
      <div className="cardview">
        <Card style={{ width: "20rem" }} className="card">
          <Stack direction="vertical" style={{ padding: "20px" }}>
            <Stack direction="horizontal">
              <div className = "cardTitle">{data.title}</div>
              <div className="ms-auto">{data.icon}</div>
            </Stack>
            <Stack direction="horizontal">
              <div style={{ marginTop: "10px" }}>
               <h2>{data.count}</h2>               
              </div>  
              <div className="ms-auto">Last 24 hours</div>
            </Stack>          
          </Stack>
        </Card>
      </div>
    );
  }
}
