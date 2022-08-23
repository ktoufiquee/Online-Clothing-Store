import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { TextField, Box, Stack } from "@mui/material";

import signup from './images/signup.jpg';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class Signup extends React.Component {
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
                                <h2>Sign Up</h2>
                            </Box>
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
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Button className="my-3" variant="primary" type="submit">Sign Up</Button>
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