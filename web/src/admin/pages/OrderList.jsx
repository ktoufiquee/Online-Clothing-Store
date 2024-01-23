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

class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderList: []
        };
        this.setStatus = this.setStatus.bind(this);
        this.columns = [
            { field: "Name", headerName: "Name", width: 200 },
            {
                field: "DeliveryAddress",
                headerName: "DeliveryAddress",
                width: 300,
                editable: true,
            },
            { field: "OrderID", headerName: "OrderID", width: 200 },
            { field: "orderStatus", headerName: "Status", width: 200 },
            {
                field: "action",
                headerName: "Action",
                width: 300,
                renderCell: (params) => {
                    return (
                        <div>
                            <EditIcon
                                onClick={() => this.setStatus(params.row.OrderID)}
                            />
                        </div>
                    );
                },
            },
        ];
    }

    setStatus(id) {
        var modList = this.state.orderList;
        for (var i = 0; i < this.state.orderList.length; ++i) {
            if (modList[i].OrderID == id) modList[i].orderStatus = 'DELIVERED';
        }
        this.setState({
            orderList: modList
        })
    }

    //for error handling

    componentDidMount() {
        axios
            .get(config.server + "/Order")
            .then((response) => {
                console.log("Order data:");
                this.setState({ orderList: response.data });
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
                                        rows={this.state.orderList}
                                        getRowId={(row) => row.OrderID}
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


export default OrderList;