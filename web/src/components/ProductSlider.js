import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';


import '@splidejs/react-splide/css/skyblue';

var config = require('../utils/config.json');

class ProductSlider extends React.Component {

    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.thumbsRef = React.createRef();
    }

    componentDidMount() {
        if (this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide) {
            this.mainRef.current.sync(this.thumbsRef.current.splide);
            console.log('splideeeeee');
        }
    }

    generateMediaUrl(filename) {
        return config.server + "/images/" + filename;
    }

    renderSlides() {
        return this.props.mediaContents.map((slide, index) => (
            <SplideSlide key={index}>
                <img src={this.generateMediaUrl(slide.FileName)} alt={slide.MediaID} />
            </SplideSlide>
        ));
    }

    render() {
        const mainOptions = {
            type: 'fade',
            heightRatio: 0.8,
            pagination: false,
            arrows: false,
            cover: true,
        };

        const thumbsOptions = {
            rewind: true,
            fixedWidth: 104,
            fixedHeight: 58,
            isNavigation: true,
            gap: 10,
            focus: 'center',
            pagination: false,
            cover: true,
            dragMinThreshold: {
                mouse: 4,
                touch: 10,
            },
            breakpoints: {
                640: {
                    fixedWidth: 66,
                    fixedHeight: 38,
                }
            }
        };

        return (
            this.props.mediaContents == null ? '' : (
                <div>
                    <Splide key={2} options={mainOptions} ref={this.mainRef} aria-labelledby="product-image">
                        {this.renderSlides()}
                    </Splide>

                    <Splide key={3} className="splide-wrapper site" options={thumbsOptions} ref={this.thumbsRef} aria-label="product-image-thumbnail">
                        {this.renderSlides()}
                    </Splide>
                </div>)
        );
    }
}

export default ProductSlider;