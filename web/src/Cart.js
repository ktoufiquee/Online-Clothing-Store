import React from 'react'
import { Col, Container, Row, Stack, Button, ButtonGroup } from 'react-bootstrap';
import CartItem from './components/CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './utils/Authentication';
import axios from 'axios';

var config = require('./utils/config.json');

/* eslint-disable no-restricted-globals */

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
        this.handlePurchase = this.handlePurchase.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    componentDidMount() {
        var cart = localStorage.getItem('cart');
        if (cart != null) {
            this.setState({ productList: JSON.parse(cart) });
            console.log(JSON.parse(cart));
        }
    }

    handlePurchase() {
        if (this.state.productList.length <= 0) {
            alert("No Product In the Cart");
        }
        else {
            console.log(JSON.parse(localStorage.getItem('cart')));
            var customer = Authentication.getUser();
            var formData = new FormData();
            formData.append("CustomerID", customer.CustomerID);
            formData.append("CartArray", localStorage.getItem('cart'));
            axios.post(config.server + '/Order/', formData, {
                'Content-Type': 'multipart/form-data'
            }).then((response) => {
                localStorage.setItem('cart', []);
                location.replace('/');
            });
        }
    }

    calculateTotal() {
        var total = 0;
        for (var i = 0; i < this.state.productList.length; ++i) {
            total += (this.state.productList[i].Price * this.state.productList[i].Amount);
        }
        return total;
    }

    render() {
        //ProductID
        //ProductName
        //Price
        //Amount
        //VariationID
        //MediaUrl

        return (
            <Stack gap={5}>
                <Container><h1>Cart</h1></Container>
                <div>
                    <Container>
                        <Row xs={1} md={4} className="g-3">
                            {
                                this.state.productList.map((data, index) => {
                                    return (
                                        <Col key={index}>
                                            <CartItem
                                                key={data.ProductID}
                                                ProductImage={data.MediaUrl}
                                                ProductName={data.ProductName}
                                                VariationID={data.VariationID}
                                                Price={data.Price}
                                                Amount={data.Amount} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
                <Container>
                    <p>Total: {this.calculateTotal()}</p>
                </Container>
                <Container>
                    <ButtonGroup vertical>
                        <Button variant="outline-primary" onClick={this.handlePurchase}>Pay On Delivery</Button>
                        <Button variant="outline-primary" disabled>Pay via Bkash</Button>
                    </ButtonGroup>
                </Container>
            </Stack>
        )

    }

}


export default Cart;