import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import a from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-09 at 12.10.36 PM.jpeg'
import b from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2023-02-27 at 12.39.21 AM.jpeg'
import c from '/workspaces/FanDen-Website/src/components/assests/P1020786.JPG'



function Slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b}
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
          src={a}
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
          src={c}
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
    
    </>
  
  );
  


}

export default Slider;