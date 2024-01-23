import axios from 'axios';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Authentication from '../utils/Authentication';

var config = require('../utils/config.json');

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: { UserID: '', Permission: '', Name: '' },
      LoggedIn: false,
      categoryList: []
    };
  }
  componentDidMount() {

    axios.get(config.server + '/Category').then((response) => {
      console.log(response.data);
      this.setState({ categoryList: response.data });
    })

    this.setState({
      User: Authentication.getUser(),
      LoggedIn: Authentication.isLoggedIn()
    })


  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Clothing Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="nav-dropdown">
              {
                this.state.categoryList.map((value) => {
                  return <NavDropdown.Item
                    key={value.CategoryID}
                    onClick={event => window.location.replace('/collection/' + value.CategoryID)}>
                    {value.CategoryName}
                  </NavDropdown.Item>
                })
              }
            </NavDropdown>
            {this.state.LoggedIn === true ?
              <Nav.Link href="/Signout">Logout</Nav.Link> :
              <Nav.Link href="/Login">Login</Nav.Link>
            }
            {this.state.LoggedIn === true ?
              <Nav.Link href="/cart">Cart</Nav.Link> :
              ''
            }
            {this.state.LoggedIn === false ?
              <Nav.Link href="/Signup">Signup</Nav.Link> :
              <Nav.Link href="">{this.state.User.Name}</Nav.Link>
            }

          </Nav>
        </Container>
      </Navbar>

    )
  }
}

export default NavComponent;