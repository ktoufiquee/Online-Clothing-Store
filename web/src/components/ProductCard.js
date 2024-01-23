import React from 'react';
import Card from 'react-bootstrap/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

var config = require('../utils/config.json');

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card onClick={event => window.location.href = ('/Product/' + this.props.ProductID)}>
        <Card.Img variant="top" src={this.props.ProductImage} />
        <Card.Body>
          <Card.Title>{this.props.ProductName}</Card.Title>
          <Card.Text>
            <span>Price: {this.props.ProductPrice}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ShoppingCartIcon />
        </Card.Footer>
      </Card>
    )
  }
}

export default ProductCard;