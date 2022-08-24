import React from 'react';
import './LoginUi.css';
import profile from "./images/a.png";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
class LoginUi extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            Email: '',
            Password: ''
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
        let response = await axios.post("http://localhost:8012/");
    }
    
    render() {
        return (
            <div className="main">
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
                                <input type="email" className='login-input' placeholder="enter your mail" />
                            </div>
                            <div className="second-input">
                                < LockIcon className="icon" />
                                <input type="password" className='login-input name' placeholder="password" />
                            </div>
                            <div className="login-button">
                                <button>Login</button>
                            </div>

                            <p className="link">
                                <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUi;