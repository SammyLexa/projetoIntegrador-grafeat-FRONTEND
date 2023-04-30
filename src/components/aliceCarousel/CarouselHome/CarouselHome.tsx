import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './CarouselHome.css'

/*const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};*/

const items = [
    <div className='items_img1'></div>,
    <div className='items_img2'></div>,
    <div className='items_img3'></div>,
    <div className='items_img4'></div>,
    <div className='items_img5'></div>
];

const CarouselHome = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        animationDuration={4500}
        disableButtonsControls
        controlsStrategy="alternate"
        autoPlay={true}
    />
);

export default CarouselHome