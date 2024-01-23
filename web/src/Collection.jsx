import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { useParams } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, FormControl } from 'react-bootstrap';
import Gallery from './Gallery';
import axios from 'axios';

var config = require('./utils/config.json');

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CategoryID: '',
            CategoryName: '',
            ProductList: [],
            searchKey: '',
            sortBy: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })

        if (name == 'sortBy') {
            var sortedList = this.state.ProductList;
            sortedList.sort((a, b) => {
                if (this.state.sortBy == '4') {
                    return parseInt(a.Price) - parseInt(b.Price);
                }
                else if (this.state.sortBy == '3') {
                    return parseInt(b.Price) - parseInt(a.Price);
                }
                else if (this.state.sortBy == '2') {
                    return parseInt(a.ProductID) - parseInt(b.ProductID);
                }
                else {
                    return parseInt(b.ProductID) - parseInt(a.ProductID);
                }
            });
            console.log("after sort:")
            console.log(sortedList);
            this.setState({
                ProductList: sortedList
            })
        }
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.setState({ CategoryID: id });

        axios.get(config.server + '/Category/Product/' + id)
            .then((response) => {
                this.setState({ ProductList: response.data });
                console.log(response.data);
            });

        axios.get(config.server + '/Category/' + id)
            .then((response) => {
                this.setState({ CategoryName: response.data.CategoryName });
            })


    }

    render() {
        return (
            <Container fluid className='my-3'>
                <Row gap={3}>
                    <Col md={2}>
                        <Stack>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    Search
                                </InputGroup.Text>
                                <Form.Control
                                    name="searchKey"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={this.state.searchKey}
                                    onChange={this.handleInput}
                                />
                            </InputGroup>
                            <Form.Select name='sortBy' onChange={this.handleInput}>
                                <option>Sort By:</option>
                                <option value="1">Old Product First</option>
                                <option value="2">New Product First</option>
                                <option value="3">Price (Low to High)</option>
                                <option value="4">Price (High to Low)</option>
                            </Form.Select>


                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <Container><h1>{this.state.CategoryName}</h1></Container>
                            <div><Gallery ProductList={this.state.ProductList.filter((value, index, array) => {
                                return value.ProductName.includes(this.state.searchKey);
                            })} /></div>
                        </Stack>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default withParams(Collection);