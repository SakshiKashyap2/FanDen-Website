import React, { useState, useEffect } from 'react';
import './news.css';
import data from './DataSlider';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data[0].images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide1((prevSlide) => (prevSlide + 1) % data[1].images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide2((prevSlide) => (prevSlide + 1) % data[2].images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide2]);

  const { id, title, text, images } = data[0];
  const { id: id1, title: title1, text: text1, images: images1 } = data[1];
  const { id: id2, title: title2, text: text2, images: images2 } = data[2];

  



  return (
    <div className="news">
      <div className="card">
        <img src={images[currentSlide]} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Football
          </a>
        </div>
      </div>

      <div className="card">
        <img src={images1[currentSlide1]} className="card-img-top" alt={title1} />
        <div className="card-body">
          <h5 className="card-title">{title1}</h5>
          <p className="card-text">{text1}</p>
          <a href="#" className="btn btn-primary">
            Cricket
          </a>
        </div>
      </div>

      <div className="card">
        <img src={images2[currentSlide2]} className="card-img-top" alt={title2} />
        <div className="card-body">
          <h5 className="card-title">{title2}</h5>
          <p className="card-text">{text2}</p>
          <a href="#" className="btn btn-primary">
            Tennis
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
