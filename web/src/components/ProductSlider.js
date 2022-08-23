import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/skyblue';

class ProductSlider extends React.Component {

    mainRef = React.createRef();
    thumbsRef = React.createRef();

    componentDidMount() {
        if (this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide) {
            this.mainRef.current.sync(this.thumbsRef.current.splide);
        }
    }

    renderSlides() {
        return generateSlides().map(slide => (
            <SplideSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} />
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
            <div>
                <Splide options={mainOptions} ref={this.mainRef} aria-labelledby="product-image">
                    {this.renderSlides()}
                </Splide>

                <Splide className="splide-wrapper site" options={thumbsOptions} ref={this.thumbsRef} aria-label="product-image-thumbnail">
                    {this.renderSlides()}
                </Splide>
            </div>
        );
    }
}

const generateSlides = (length = 10, sig = 0) => {
    return Array.from({ length }).map((value, index) => {
        index = sig || index;

        return {
            src: `https://source.unsplash.com/random/800x450?sig=${index}`,
            alt: `Image ${index + 1}`,
        };
    });
}

export default ProductSlider;