import React from 'react';
import ProductCard from './components/ProductCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

var config = require('./utils/config.json');

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row xs={1} md={4} className="g-3">
                    {
                        this.props.ProductList.map((data, index) => {
                            return <Col key={index}><ProductCard key={data.ProductID} ProductID={data.ProductID} ProductName={data.ProductName} ProductPrice={data.Price} ProductImage={config.server + '/images/' + data.FileName} /></Col>
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default Gallery;