import React, { Component } from 'react';
import Navbar from './admin/components/navbar';
import Sidebar from './admin/components/sidebar';
import axios from 'axios';
import { TextField, MenuItem, Stack, Divider } from '@mui/material';
import './styles/dashboard.scss';
import { Button, Form } from 'react-bootstrap';

const sizes = ['XS', 'SM', 'M', 'L', 'XL', 'XXL'];
const img_preview = [{
    aspectRatio: '1 / 1',
    width: '128px'
}]

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleVariationGeneration = this.handleVariationGeneration.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.imageInput = React.createRef();
        this.state = {
            Category: '',
            ProductName: '',
            Description: '',
            Price: 0,
            categoryList: [],
            Size: '',
            Color: '#000000',
            Stock: 0,
            variationList: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8012/Category')
            .then((response) => {
                this.setState({ categoryList: response.data });
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleVariationGeneration(event) {
        event.preventDefault();
        var currentVariationList = this.state.variationList;
        currentVariationList.push({ Size: this.state.Size, Color: this.state.Color, Stock: this.state.Stock });
        this.setState({ variationList: currentVariationList, Size: '', Color: '#000000', Stock: 0 });
    }

    async handleSubmit(event) {
        event.preventDefault();

        var productData = new FormData();
        productData.append('ProductName', this.state.ProductName);
        productData.append('CategoryID', this.state.Category);
        productData.append('Description', this.state.Description);
        productData.append('Price', this.state.Price);

        await axios.post('http://localhost:8012/Product', productData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data);
            var variationData = new FormData();
            console.log(this.state.variationList.length);
            variationData.append('ProductID', response.data);
            variationData.append('VariationList', JSON.stringify(this.state.variationList));

            axios.post('http://localhost:8012/Variation/' + response.data, variationData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((data) => {
                console.log(data);
            })
        })



    }

    render() {

        return (
            <div class="dashboard">
                <Sidebar />
                <div className="dashboardContainer">
                    <Navbar />
                    <Stack direction='row'>
                        <Form className='m-5'>
                            <Stack direction='row' spacing={5} divider={<Divider orientation="vertical" flexItem />}>
                                <Stack spacing={2}>
                                    <TextField name='ProductName' label="Product Name" variant="filled" value={this.state.ProductName} onChange={this.handleInputChange} required />
                                    <TextField
                                        name="Category"
                                        select
                                        label="Category"
                                        value={this.state.Category}
                                        onChange={this.handleInputChange}>
                                        {this.state.categoryList.map((option) => (
                                            <MenuItem key={option.CategoryID} value={option.CategoryID}>
                                                {option.CategoryName}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        label="Description"
                                        name="Description"
                                        value={this.state.Description}
                                        onChange={this.handleInputChange}
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        required
                                    />
                                    <TextField
                                        label="Price"
                                        name="Price"
                                        type="number"
                                        value={this.state.Price}
                                        onChange={this.handleInputChange}
                                        variant="filled"
                                    />
                                </Stack>
                                <Stack spacing={2}>
                                    <TextField
                                        style={{ maxWidth: '512px', minWidth: '128px' }}
                                        name="Size"
                                        select
                                        label="Size"
                                        value={this.state.Size}
                                        onChange={this.handleInputChange}>
                                        {sizes.map((data) => (
                                            <MenuItem key={data} value={data}>
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <input name='Color' type='color' style={{ maxWidth: '512px', minWidth: '128px' }} value={this.state.Color} onChange={this.handleInputChange} />
                                    <TextField
                                        label="Stock"
                                        name="Stock"
                                        value={this.state.Stock}
                                        onChange={this.handleInputChange}
                                        variant="filled"
                                    />
                                    <Button variant='secondary' onClick={this.handleVariationGeneration}>Add Variant</Button>
                                    {this.state.variationList.map((value) => {
                                        return (
                                            <p>
                                                {console.log(value)}
                                                <span>Size: {value.Size}, </span>
                                                <span style={{ color: value.Color }}>Color: {value.Color}, </span>
                                                <span className='mx-2'>Stock: {value.Stock}</span>
                                            </p>
                                        )
                                    })}
                                </Stack>
                                <Stack spacing={2}>
                                    <label>Upload Images:<br />
                                        <input type="file" accept='image/png, image/jpeg, image/jpg' ref={this.imageInput} multiple required />
                                    </label>
                                </Stack>
                                <Stack spacing={2}>
                                    <Button type='submit' variant='primary' onClick={this.handleSubmit}>Add This Product</Button>
                                </Stack>
                            </Stack>
                        </Form>
                    </Stack>

                </div>
            </div>
        )
    }
}
