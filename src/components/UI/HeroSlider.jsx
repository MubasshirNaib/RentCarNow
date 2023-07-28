/* eslint-disable max-lines */
import React,{ useRef }from "react";
import { Link, NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { Container } from "reactstrap";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
     
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent 5000 tk Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 40% Off</h1>

            <button className="btn reserve__btn mt-4 py-3 px-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent 6000 tk Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 30% Off</h1>

            <button className="btn reserve__btn mt-4 py-3 px-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent 7000tk Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 10% Off</h1>

            <button className="btn reserve__btn mt-4 py-3 px-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;