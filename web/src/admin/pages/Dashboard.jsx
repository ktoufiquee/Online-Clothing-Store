import React from "react";
import { Form, Button } from "react-bootstrap";
import { TextField, Box, Stack, Alert } from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Authentication from "../../utils/Authentication";
import signup from '../../images/signup.jpg';


import '../../Signup.css';
import axios from "axios";

var config = require('../../utils/config.json');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      Email: '',
      Password: ''
    })
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('Email', this.state.Email);
    formData.append('Password', this.state.Password);
    let response = await axios.post(config.server + "/User/Login/Admin", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if (response.data.error == true) {
      alert(response.data.message);
    }
    else {
      Authentication.setUser(response.data);
      this.setState({ isLoggedIn: true });
      window.location.replace('/Admin/category');
    }
  }


  render() {

    return (
      <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(213,206,206,1) 45%, rgba(144,138,138,1) 100%)' }}>
        <Stack direction={{ md: 'row', sm: 'column' }}
          justifyContent="center"
          alignItems="center"
          spacing={5}
          className="vertical-center shadow p-5 mb-5 bg-white rounded">
          <Form style={{ minWidth: '384px' }}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <h2>Admin Login</h2>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField name="Email" type="email" fullWidth label="Email" variant="standard" onChange={this.handleInputChange} />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField name="Password" type="password" fullWidth label="Password" variant="standard" onChange={this.handleInputChange} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Button className="my-3" variant="primary" type="submit" onClick={this.handleSubmit}>Login</Button>
              </Box>
            </Stack>
          </Form>
          <img src={signup} />
        </Stack>
      </div >

    )
  }
}

export default Home;