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

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editCategory = this.editCategory.bind(this);

    this.state = {
      categoryList: [],
      CategoryName: "",
      TargetAudience: '',
      TargetList: [],
      showError: false
    };
    this.columns = [
      { field: "CategoryID", headerName: "Category ID", width: 200 },
      {
        field: "CategoryName",
        headerName: "Category Name",
        width: 300,
        editable: true,
      },
      { field: "TargetID", headerName: "Target ID", width: 200 },
      {
        field: "action",
        headerName: "Action",
        width: 300,
        renderCell: (params) => {
          return (
            <div>
              <EditIcon
                onClick={() => this.editCategory(params.row.CategoryID)}
              />
            </div>
          );
        },
      },
    ];
  }

  editCategory(id) {
    alert("edit button");
  }

  //for error handling

  componentDidMount() {
    axios
      .get(config.server + "/Category")
      .then((response) => {
        this.setState({ categoryList: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(config.server + "/TargetAudience").then((response) => {
      this.setState({ TargetList: response.data });
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  checkValidation() {
    if (this.state.CategoryName === "") {
      return true;
    }
    if (this.state.TargetAudience === "") {
      return true;
    }
    return false;
  }
  handleSubmit(event) {
    var isError = this.checkValidation(this.state.CategoryName);
    if (!isError) {
      event.preventDefault();
      var formData = new FormData();
      formData.append("CategoryName", this.state.CategoryName);
      formData.append("TargetID", this.state.TargetAudience);
      axios
        .post(config.server + "/Category", formData, {
          "Content-Type": "multipart/form-data",
        })
        .then((response) => console.log(response))
        .catch(function (error) {
          this.setState({ showError: true });
        });
    } else {
      this.setState({ showError: true });
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="flex-nowrap" >
          <Sidebar />
          <Col>
            <Container fluid className="mt-2 table-container">
              <Row className="mt-2">
                {this.state.showError && (
                  <div className="mb-2">
                    <Alert severity="error">
                      Fill up the input field and select the checkbox!
                    </Alert>
                  </div>
                )}

                <Stack direction="horizontal">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <TextField
                      name="CategoryName"
                      type="text"
                      fullWidth
                      label="Add Category"
                      variant="standard"
                      style={{ width: "200px" }}
                      onChange={this.handleInputChange}
                      value={this.state.CategoryName}
                    />
                    <TextField
                      name="TargetAudience"
                      select
                      label="Target Audience"
                      style={{ width: "180px", marginLeft: "10px" }}
                      value={this.state.TargetAudience}
                      onChange={this.handleInputChange}
                    >
                      {this.state.TargetList.map((option) => (
                        <MenuItem key={option.TargetID} value={option.TargetID}>
                          {option.AudienceName}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Button
                      className="ms-2"
                      style={{
                        width: "100px",
                        height: "40px",
                        backgroundColor: "#FF888E",
                        color: "white",
                      }}
                      onClick={this.handleSubmit}
                      type="submit"
                    >
                      <AddIcon className="me-1" />
                      Add
                    </Button>
                  </Box>
                </Stack>
              </Row>
              <Row className="mt-2">
                <div style={{ height: 600, width: "100%" }} className="table">
                  <DataGrid
                    rows={this.state.categoryList}
                    getRowId={(row) => row.CategoryID}
                    columns={this.columns}
                    rowsPerPageOptions={[7]}
                  />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
        <Modal show={this.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
