import axios from "axios";
var config = require('./config.json');

class Authentication {
    static getUser = () => {
        return JSON.parse(localStorage.getItem("User"));
    }

    static setUser = (data) => {
        var user = {
            "UserID" : data.UserID,
            "CustomerID" : data.CustomerID,
            "Permission" : data.Permission,
            "Name" : data.Name
        };
        localStorage.setItem("User", JSON.stringify(user));
    }

    static isLoggedIn = () => {
        var user = this.getUser();
        if (user == null) {
            return false;
        }
        if (user.UserID == null) {
            return false;
        }
        return true;
    }

    static LogOut = () => {
        localStorage.setItem("User", null);
    }
}

export default Authentication;