import React from "react";
import { Navigate } from "react-router-dom";
import Authentication from "./utils/Authentication";

class Signout extends React.Component {
    render() {
        Authentication.LogOut();
        return (
            <Navigate to='/' />
        )
    }
}

export default Signout;