import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "./carousel-item/carousel-item";
import axios from "axios";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?api_key=583d1254a47fb88b9235f87dacba82e4")
      .then((response) => {
        let dataSliced = response.data.results.slice(0, 4);
        this.setState({ data: dataSliced });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

    const { data } = this.state;
    return (
      <div>
        <Slider {...settings}>
          {data.map((mapData) => (
            <Carousel key={mapData.id} title={mapData.title} banner={mapData.poster_path} genre={mapData.genre_ids} id={mapData.id} />
          ))}
        </Slider>
      </div>
    );
  }
}
