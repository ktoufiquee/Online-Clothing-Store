import React from "react";
import ProductSlider from "./components/ProductSlider";
import { Container, Row, Col, Form, Stack } from "react-bootstrap";
import { Rating, Button, TextField } from "@mui/material";
import ProductReview from "./components/ProductReview";
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import '@splidejs/react-splide/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Authentication from "./utils/Authentication";

var config = require('./utils/config.json');

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rating: 0, review: '', product: {}, variation: [], variationID: '', stock: -1, reviewList: [], Amount: 0 };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchByID = this.searchByID.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.state.product.Variation = [];
    }

    handleAddToCart() {
        if (this.state.Amount > this.state.stock) {
            alert("Can't buy more than stock!");
        }
        else {
            var currItem = {
                ProductID: this.state.product.ProductID,
                ProductName: this.state.product.ProductName,
                Price: this.state.product.Price,
                Amount: this.state.Amount,
                VariationID: this.state.variationID,
                MediaUrl: config.server + '/images/' + this.state.product.MediaContent[0].FileName
            };
            var cart = localStorage.getItem('cart');
            if (cart == null) {
                cart = [];
            }
            else {
                cart = JSON.parse(cart);
            }
            var found = false;
            for (let i = 0; i < cart.length; ++i) {
                if (cart[i].VariationID == currItem.VariationID) {
                    cart[i].Amount += currItem.Amount;
                    found = true;
                    break;
                }
            }
            if (!found) {
                cart.push(currItem);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        console.log(JSON.parse(localStorage.getItem('cart')));
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        if (name === 'variationID') {
            this.setState({ stock: this.searchByID(value, this.state.product.Variation) });
        }
    }

    searchByID(key, inpuatArray) {
        for (var i = 0; i < inpuatArray.length; ++i) {
            if (inpuatArray[i].VariationID == key) {
                return inpuatArray[i].Stock;
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var reviewData = new FormData();
        console.log(Authentication.getUser());
        reviewData.append("CustomerID", Authentication.getUser()["CustomerID"]);
        reviewData.append("ProudctID", 1);
        reviewData.append("Rating", this.state.rating);
        reviewData.append("Details", this.state.review);
        axios.post(config.server + '/Review', reviewData, {
            'Content-Type': 'multipart/form-data'
        }).then((response) => {
            console.log(response.data);
        })
    }

    componentDidMount() {
        let { id } = this.props.params;

        axios.get(config.server + '/Product/' + id)
            .then((response) => {
                this.setState({ product: response.data });
            });
        axios.get(config.server + '/Review/' + id)
            .then((response) => {
                this.setState({ reviewList: response.data });
            })

    }

    render() {

        var contentDirection = "horizontal";
        if (window.innerWidth < 720) {
            contentDirection = "vertical";
        }

        return (
            <Container fluid>
                <Row className="m-5 justify-content-md-center">
                    <Col md={6}>
                        <ProductSlider mediaContents={this.state.product.MediaContent} />
                    </Col>
                    <Col md={4}>
                        <h1>{this.state.product.ProductName}</h1>
                        <p style={{ textAlign: 'justify' }}>
                            {this.state.product.Description}
                        </p>
                        <p>Price: {this.state.product.Price} Tk.</p>
                        <p>Stock: {this.state.stock}</p>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="variationGroupLabel">Variation</InputLabel>
                                <Select
                                    labelId="variationGroupLabel"
                                    id="varitaionGroup"
                                    name="variationID"
                                    value={this.state.variationID}
                                    label="Variation"
                                    onChange={this.handleInputChange}>
                                    {this.state.product.Variation.map((data) => {
                                        return <MenuItem key={data.VariationID} value={data.VariationID}>
                                            <p>{data.Size + "\t\t"}
                                                <span style={{ backgroundColor: data.Color, whiteSpace: 'pre' }}>{"\t"}</span>
                                            </p></MenuItem>
                                    })}
                                </Select>
                                {Authentication.isLoggedIn() == true ?
                                    <Stack direction="horizontal">
                                        <TextField
                                            name="Amount"
                                            id="standard-number"
                                            label="Amount"
                                            type="number"
                                            value={this.state.Amount}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                            onChange={this.handleInputChange}
                                        />
                                        <Button onClick={this.handleAddToCart} className="my-2" style={{ marginLeft: '.5rem' }} variant="contained" startIcon={<ShoppingCartIcon />}>
                                            Add to Cart
                                        </Button>
                                    </Stack> : ''
                                }

                            </FormControl>
                        </Box>

                    </Col>
                </Row>
                {Authentication.isLoggedIn() == true ?
                    <Row className="mx-5 justify-content-md-center">
                        <Col md={10}>
                            <Form>
                                <div>
                                    <span style={{ verticalAlign: 'top', fontWeight: 'bold' }}>How was your experience? </span>
                                    <Rating
                                        name="rating"
                                        value={this.state.rating}
                                        onChange={this.handleInputChange} />
                                </div>
                                <Form.Control
                                    name="review"
                                    as="textarea"
                                    rows={3}
                                    value={this.state.review}
                                    onChange={this.handleInputChange} >
                                </Form.Control>
                                <Button className="my-2" type="submit" variant="contained" onClick={this.handleSubmit}>Submit Review</Button>
                            </Form>
                        </Col>
                    </Row> : ''
                }
                <Row className="mx-5 justify-content-md-center">
                    {this.state.reviewList.map((value, index) => {
                        return (
                            <Col key={index} md={10}>
                                <ProductReview key={index} Name={value.Name} Rating={Number(value.Rating)} Details={value.Details} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default withParams(Product);

/*
<Stack direction={contentDirection} className="m-5" gap={5} >
                <div style={{
                    width: '50vw',
                    border: '1rem solid'
                }}>
                    <ProductSlider />
                </div>
                <div style={{
                    height: '100%',
                    border: '1rem solid'
                }}>
                    <h1>Avengers T-Shirt</h1>
                    <p>Product Descriptions</p>
                    <p>Classy and crisp, a pure cotton t-shirt is a must-have. Keeping it classy, elegant, versatile and even minimal, our exhaustive collection brings you t-shirts to suit your every mood. Be it a pair of jeans, shorts, or a skirt, these t-shirts make sure to up your game and make you stand out.

                    </p>
                    <p>Price:</p>
                    <p>Sizes:</p>
                    <p>Colors:</p>
                    <p>Stock: </p>
                </div>
            </Stack>
*/