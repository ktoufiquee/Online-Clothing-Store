import React from 'react';
import { Card } from 'react-bootstrap';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var filtered = cart.filter((value, index, arr) => {
            return value.VariationID != this.props.VariationID;
        })
        console.log(filtered);
        localStorage.setItem('cart', JSON.stringify(filtered));
    }


    render() {
        return (
            <Card>
                <Card.Header className='text-center'>Amount: {this.props.Amount}</Card.Header>
                <Card.Img variant="top" src={this.props.ProductImage} />
                <Card.Body onClick={event => window.location.href = ('/Product/' + this.props.key)}>
                    <Card.Title>{this.props.ProductName}</Card.Title>
                    <Card.Text>
                        <span>Variation ID: {this.props.VariationID}</span><br />
                        <span>Price: {this.props.Price}</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer onClick={this.handleCancel} className='bg-danger text-center'>
                    Cancel
                </Card.Footer>
            </Card >
        )
    }

}

export default CartItem;