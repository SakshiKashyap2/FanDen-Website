import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1041/800/450"
          alt="First slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1043/800/450"
          alt="Second slide"
          style={{ height: "500px" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1052/800/450"
          alt="Third slide"
          style={{ height: "500px" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={{marginTop: '20px', textAlign: 'center'}}>
        <h2 style={{ fontFamily: 'Algerian' }}>JOIN THE REVOLUTION</h2>
    </div>
    </>
  
  );
  


}

export default Slider;