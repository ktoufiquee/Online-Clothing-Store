import React, { Component } from "react";
import Sidebar from "./../components/sidebar";
import { DataGrid } from "@mui/x-data-grid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./../../styles/CategoryList.scss";
import AddIcon from "@mui/icons-material/Add";
import { TextField, Box, MenuItem } from "@mui/material";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { forwardRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import Modal from "react-bootstrap/Modal";

var config = require('../../utils/config.json');

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: []
        };
        this.columns = [
            { field: "ProductID", headerName: "ProductID", width: 200 },
            {
                field: "Price",
                headerName: "Price",
                width: 300,
                editable: true,
            },
            { field: "ProductName", headerName: "ProductName", width: 200 }
        ];
    }



    //for error handling

    componentDidMount() {
        axios
            .get(config.server + "/Category/Product/1")
            .then((response) => {
                console.log("Order data:");
                this.setState({ productList: response.data });
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
                                        rows={this.state.productList}
                                        getRowId={(row) => row.ProductID}
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


export default ProductList;