import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import { DataGrid } from "@mui/x-data-grid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { TextField, Box, MenuItem } from "@mui/material";
import Button from "react-bootstrap/Button";
import axios from "axios";

import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";

var config = require('../../utils/config.json');


export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CustomerList: [],
    };
    this.columns = [
      { field: "CustomerID", headerName: "Customer ID", width: 100 },
      {
        field: "UserID",
        headerName: "User ID",
        width: 100
      },
      { field: "Name", headerName: "Name", width: 150 },
      { field: "Phone", headerName: "Phone", width: 150 },
      { field: "Email", headerName: "Email", width: 200 },
      { field: "DeliveryAddress", headerName: "DeliveryAddress", width: 300 },
    ];
  }

  componentDidMount() {
    axios
      .get(config.server + "/User/Customer")
      .then((response) => {
        this.setState({ CustomerList: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Container fluid>
        <Row className="flex-nowrap" >
          <Sidebar />
          <Col>
            <Container fluid className="mt-2 table-container">
              <Row className="mt-2">
                <div style={{ height: 600, width: "100%" }} className="table">
                  <DataGrid
                    rows={this.state.CustomerList}
                    getRowId={(row) => row.CustomerID}
                    columns={this.columns}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>

      </Container>
    );
  }
}
