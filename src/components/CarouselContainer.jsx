import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import { Carousel } from 'react-responsive-carousel'
// import '
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselContainer({ selectPark }) {
    return (
           
    <Carousel style={{ minHeight: '50vh' }}>
      {selectPark.images.map((item) => {
        return (
			<Carousel.Item style={{ maxHeight: '50vh' }}>
            <img
              className="d-block w-100"
              style={{
                height: '50vh',
                width: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
              src={item.url}/>
          </Carousel.Item>)})}
    </Carousel>
  );
};

export default CarouselContainer;