import React from "react";
import { Stack, Badge, Alert } from "react-bootstrap"
import { Rating } from "@mui/material";

class ProductReview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Alert key="secondary" variant="secondary">
                <Stack direction="vertical">
                    <div>
                        <span style={{ fontWeight: 'bold' }}>{this.props.Name} </span>
                    </div>
                    <Stack direction="horizontal">
                        <Badge style={{ verticalAlign: 'super', marginRight: '1rem' }} bg="warning" text="dark">Verified Purchase</Badge>
                        <Rating
                            value={this.props.Rating}
                            readOnly />
                        <span className="ms-auto">13:52 PM</span>
                    </Stack>
                    <hr />
                    <div>
                        {this.props.Details}
                    </div>
                </Stack>
            </Alert>
        )
    }
}

export default ProductReview;