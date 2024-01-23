class AdminAuth {
    static getUser = () => {
        return JSON.parse(localStorage.getItem("Admin"));
    }

    static setUser = (data) => {
        var user = {
            "UserID" : data.UserID,
            "EmployeeID" : data.CustomerID,
            "Permission" : data.Permission,
            "Name" : data.Name
        };
        localStorage.setItem("Admin", JSON.stringify(user));
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
        localStorage.setItem("Admin", null);
    }
}

export default AdminAuth;