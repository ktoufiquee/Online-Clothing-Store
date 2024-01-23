import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./../../styles/datatable.scss";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 }, 
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',    
    width: 300,   
  },
  {
    field: 'address',
    headerName: 'Address',    
    width: 300,   
  },
];

const rows = [
  { id: 1, name: 'Snow', phone: '012345678', email: "35", address: "abc" },
  { id: 2, name: 'Lannister', phone: '1111', email: "42", address: "abc" },
  { id: 3, name: 'Lannister', phone: '01235', email: "45", address: "abc" },
  { id: 4, name: 'Stark', phone: '22', email: "16", address: "abc" },
  { id: 5, name: 'Clifford', phone: '1111', email: "44", address: "abc" },
  { id: 6, name: 'Frances', phone: '333', email: "36", address: "abc" },
  { id: 7, name: 'Roxie', phone: '4444', email: "65", address: "abc" },
];
export default class datatable extends Component {
  render() {
    return (
      <div style={{ height: 600, width: '100%' }} className = "datatable">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }
}
