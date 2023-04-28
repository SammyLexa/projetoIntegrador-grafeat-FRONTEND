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
    <img className='bannerHome' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/carrossel1?updatedAt=1682692502691" alt="" />,
    <img className='bannerHome' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/carrossel2?updatedAt=1682692520499" alt="" />,
    <img className='bannerHome' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/carrossel3?updatedAt=1682692537060" alt="" />,
    <img className='bannerHome' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/carrossel4?updatedAt=1682692557761" alt="" />,
    <img className='bannerHome' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/carrossel5?updatedAt=1682692573523" alt="" />,
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