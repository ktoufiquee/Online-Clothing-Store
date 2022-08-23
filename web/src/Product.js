import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductSlider from "./components/ProductSlider";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Rating } from "@mui/material";
import ProductReview from "./components/ProductReview";

import '@splidejs/react-splide/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
    { "Name": "Kazi Toufique Elahi", "Rating": 4, "Details": "Great Product" },
    { "Name": "Tahira Ferdousi", "Rating": 3, "Details": "Meh Product" },
    { "Name": "Tasnuva Binte Rahman", "Rating": 4, "Details": "Bad Product" },
    { "Name": "Samir Sarker", "Rating": 4, "Details": "Bruh Product" }
]


class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rating: 0, review: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.review + "\n" + this.state.rating);
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
                        <ProductSlider />
                    </Col>
                    <Col md={4}>
                        <h1>Avengers T-Shirt</h1>
                        <p>Product Descriptions</p>
                        <p style={{ textAlign: 'justify' }}>Classy and crisp, a pure cotton t-shirt is a must-have. Keeping it classy, elegant, versatile and even minimal, our exhaustive collection brings you t-shirts to suit your every mood. Be it a pair of jeans, shorts, or a skirt, these t-shirts make sure to up your game and make you stand out.

                        </p>
                        <p>Price:</p>
                        <p>Sizes:</p>
                        <p>Colors:</p>
                        <p>Stock: </p>
                    </Col>
                </Row>
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
                            <Button className="my-2" type="submit" onClick={this.handleSubmit}>Submit Review</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mx-5 justify-content-md-center">
                    {reviews.map((value) => {
                        return (
                            <Col md={10}>
                                <ProductReview Name={value.Name} Rating={value.Rating} Details={value.Details} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default Product;

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