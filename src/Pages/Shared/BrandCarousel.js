import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: '200px' }}
                    className="d-block w-100"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '200px' }}
                    className="d-block w-100"
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;