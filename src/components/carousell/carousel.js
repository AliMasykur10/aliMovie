import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "./carousel-item/carousel-item";
import "./carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Carousel />
          <Carousel />
        </Slider>
      </div>
    );
  }
}
