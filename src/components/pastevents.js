import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 100,
      evArrow: (
        <button className="slick-prev" onClick={this.previous} style={{ color: "black" }}>
          Previous
        </button>
      ),
      nextArrow: (
        <button className="slick-next" onClick={this.next} style={{ color: "black" }}>
          Next
        </button>
      ),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };


    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "Algerian" }}>PAST EVENTS</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
        <div key={1}>
            <video className="d-block w-100" controls style={{ height: "300px" }}>
                <source
                src="https://www.youtube.com/watch?v=fbO_0AbkUOg&t=85s&ab_channel=IndianFootball" 
                type="video/mp4"
                />
                
            </video>
        </div>
          <div key={1}>
          <img className="d-block w-100"
          src="https://i.pinimg.com/736x/56/2c/f2/562cf2c800bf4c7b1106b31250a86ffb.jpg"
          alt="First slide"
          style={{ height: "300px" }} 
          />
          </div>
          <div key={2}>
          <img className="d-block w-100"
          src="https://i.ytimg.com/vi/PNf4L-ok7aA/maxresdefault.jpg"
          alt="Second Slide"
          style={{ height: "300px" }} 
          />
          </div>
          <div key={3}>
            <video className="d-block w-100" controls style={{ height: "300px" ,}}>
                <source
                src="https://www.example.com/path/to/video.mp4" 
                type="video/mp4"
                />
                
            </video>
        </div>
          <div key={4} >
            <h3>4</h3>
          </div>
          <div key={5} >
            <h3>5</h3>
          </div>
          <div key={6} >
            <h3>6</h3>
          </div>
        </Slider>
        
      </div>
    );
  }
}