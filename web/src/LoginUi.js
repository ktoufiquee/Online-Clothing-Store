import React from 'react';
import './LoginUi.css';
import profile from "./images/a.png";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import Authentication from './utils/Authentication';
import { Navigate } from 'react-router-dom';
var config = require('./utils/config.json');

class LoginUi extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            Email: '',
            Password: '',
            isLoggedIn: false
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

    async handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('Email', this.state.Email);
        formData.append('Password', this.state.Password);
        let response = await axios.post(config.server + "/User/Login/Customer", formData, {
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
            window.location.replace('/');
        }
    }

    render() {
        return (
            < div className="main" >
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile" />
                            </div>
                        </div>
                        <div>
                            <h1>Login</h1>
                            <div>
                                < EmailIcon className="icon " />
                                <input name="Email" value={this.state.Email} type="email" className='login-input' placeholder="enter your mail" onChange={this.handleInputChange} />
                            </div>
                            <div className="second-input">
                                < LockIcon className="icon" />
                                <input name='Password' value={this.state.Password} type="password" className='login-input name' placeholder="password" onChange={this.handleInputChange} />
                            </div>
                            <div className="login-button">
                                <button type='submit' onClick={this.handleSubmit}>Login</button>
                            </div>

                            <p className="link">
                                Don't have an account? <a href="/signup">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginUi;