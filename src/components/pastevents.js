import React, { Component } from "react";
import Slider from "react-slick";
import pic from '/workspaces/FanDen-Website/src/components/assests/eventspics.jpg';
import e2 from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-10-07 at 3.21.48 PM.jpeg';
import e3 from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2023-03-05 at 10.33.36 PM.jpeg';
import e4 from '/workspaces/FanDen-Website/src/components/assests/WhatsApp Image 2022-09-26 at 3.32.43 PM (2).jpeg';



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
        <img className="d-block w-100"
          src={e4}
          alt="First slide"
          style={{ height: "300px" }} 
          />
        </div>
          <div key={1}>
          <img className="d-block w-100"
          src={e2}
          alt="First slide"
          style={{ height: "300px" }} 
          />
          </div>
          <div key={2}>
          <img className="d-block w-100"
          src={e3}
          alt="Second Slide"
          style={{ height: "300px" }} 
          />
          </div>
          <div key={3}>
          <img className="d-block w-100"
          src={e4}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
        </div>
          <div key={4} >
          <img className="d-block w-100"
          src={pic}
          alt="Second Slide"
          style={{ height: "300px" }}
          />

          </div>
          <div key={5} >
          <img className="d-block w-100"
          src={e2}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </div>
          <div key={6} >
          <img className="d-block w-100"
          src={e3}
          alt="Second Slide"
          style={{ height: "300px" }}
          />
          </div>
        </Slider>
        
      </div>
    );
  }
}