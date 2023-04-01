import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "./carousel-item/carousel-item";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
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
