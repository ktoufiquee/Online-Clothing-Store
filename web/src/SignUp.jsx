import React from "react";
import { Form, Button } from "react-bootstrap";
import { TextField, Box, Stack, Alert } from "@mui/material";

import signup from './images/signup.jpg';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import './Signup.css';
import axios from "axios";

var config = require('./utils/config.json');

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Password: '',
            confirmPassword: '',
            Address: '',
            nameError: false,
            mailError: false,
            passError: false,
            matchError: false,
            addressError: false,
            phoneExists: false,
            emailExists: false
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleValidation() {
        const namePattern = /^[a-zA-Z ]+$/;
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordPattern = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        var _nameError = !namePattern.test(this.state.Name);
        var _mailError = !emailPattern.test(this.state.Email);
        var _passError = !passwordPattern.test(this.state.Password);
        var _matchError = this.state.Password != this.state.confirmPassword;
        var _addressError = this.state.Address.trim().length <= 0;
        this.setState({ nameError: _nameError });
        this.setState({ mailError: _mailError });
        this.setState({ passError: _passError });
        this.setState({ matchError: _matchError });
        this.setState({ addressError: _addressError });

        return _nameError || _mailError || _passError || _matchError || _addressError;
    }

    handleSubmit(event) {
        event.preventDefault();
        var invalid = this.handleValidation();
        if (!invalid) {
            console.log(this.state.nameError);
            console.log(this.state.mailError);
            console.log(this.state.passError);
            console.log(this.state.matchError);
            var formData = new FormData();
            formData.append('Name', this.state.Name);
            formData.append('Phone', this.state.Phone);
            formData.append('Email', this.state.Email);
            formData.append('Password', this.state.Password);
            formData.append('Address', this.state.Address);
            axios.post(config.server + '/User/Customer', formData, {
                'Content-Type': 'multipart/form-data'
            }).then((response) => {
                console.log(response.data);
                if (response.data.error == true) {
                    if (response.data.code == 1062 && response.data.message.includes("Phone")) {
                        this.setState({ phoneExists: true });
                    }
                    if (response.data.code == 1062 && response.data.message.includes("Email")) {
                        this.setState({ emailExists: true });
                    }
                } else {
                    window.location.replace('\login');
                }
            });
        }


    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(213,206,206,1) 45%, rgba(144,138,138,1) 100%)' }}>
                {this.state.nameError && (
                    <div className="mb-2">
                        <Alert severity="error">
                            Invalid name!
                        </Alert>
                    </div>
                )}
                {this.state.mailError && (
                    <div className="mb-2">
                        <Alert severity="error">
                            Invalid email!
                        </Alert>
                    </div>
                )}
                {this.state.passError && (
                    <div className="mb-2">
                        <Alert severity="error">
                            Invalid/weak password!
                        </Alert>
                    </div>
                )}
                {this.state.matchError && (
                    <div className="mb-2">
                        <Alert severity="error">
                            Passwords must match!
                        </Alert>
                    </div>
                )}
                {this.state.addressError && (
                    <div className="mb-2">
                        <Alert severity="error">
                            Address can't be empty!
                        </Alert>
                    </div>
                )}
                {this.state.phoneExists && (
                    <div className="mb-2">
                        <Alert severity="error">
                            This phone number is already in use!
                        </Alert>
                    </div>
                )}
                {this.state.emailExists && (
                    <div className="mb-2">
                        <Alert severity="error">
                            This email is already in use!
                        </Alert>
                    </div>
                )}
                <Stack direction={{ md: 'row', sm: 'column' }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    className="vertical-center shadow p-5 mb-5 bg-white rounded">
                    <Form style={{ minWidth: '384px' }}>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <h2>Sign Up</h2>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="Name" type="text" fullWidth label="Name" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="Email" type="email" fullWidth label="Email" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="Phone" type="tel" fullWidth label="Phone" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AddLocationIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="Address" fullWidth label="Address" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="Password" type="password" fullWidth label="Password" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name="confirmPassword" type="password" fullWidth id="input-with-sx" label="Confirm Password" variant="standard" onChange={this.handleInputChange} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Button className="my-3" variant="primary" type="submit" onClick={this.handleSubmit}>Sign Up</Button>
                            </Box>
                        </Stack>
                    </Form>
                    <img src={signup} />
                </Stack>
            </div >
        )
    }
}

export default Signup

/*
<Form style={{ minWidth: '384px' }}>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth label="Name" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth label="Email" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth label="Phone" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth label="Password" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth id="input-with-sx" label="Confirm Password" variant="standard" />
                            </Box>
                        </Stack>
                    </Form>
                    <img src={signup} />

*/