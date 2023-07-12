import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import a from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-09 at 12.10.36 PM.jpeg'
import b from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2023-02-27 at 12.39.21 AM.jpeg'
import c from '/workspaces/FanDen-Website/src/components/assests/P1020786.JPG'
import d from '/workspaces/FanDen-Website/src/components/assests/FanDen.jpg'
import { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


export default class VerticalMode extends Component {
  render() {
    const textStyle = {
        
      bottom: "0",
      fontFamily:"Algerian",
      left: "0",
      right: "0",
      backgroundColor: "black",
      textcolor:'white',
      color: "white",
      padding: "10px"
    };

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 2000,
      
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        <Slider {...settings}>
        <div key={0} >
        <Link to="/events">
        <img className="d-block w-100"
          src={d}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        <div key={1} >
        <Link to="/events">
        <img className="d-block w-100"
          src={b}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        <div key={2} >
        <Link to="/events">
        <img className="d-block w-100"
          src={c}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        <div key={3} >
        <Link to="/events">
        <img className="d-block w-100"
          src={a}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        <div key={4} >
        <Link to="/events">
        <img className="d-block w-100"
          src={b}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        <div key={5} >
        <Link to="/events">
        <img className="d-block w-100"
          src={c}
          alt="First slide"
          style={{ height: "500px" }} 
          />
          </Link>
          <div className="slider-text" style={textStyle}>Manchester Derby in Malad0</div>
        </div>
        </Slider>
      </div>
    );
  }
}