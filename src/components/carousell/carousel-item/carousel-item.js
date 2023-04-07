// import { useState } from "react";
import "./carousel-item.css";
import { Link } from "react-router-dom";
// import axios from "axios";

const Carousel = (props) => {
  const backdropUrl = (backdropPath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${backdropPath}`;
  };

  const genreId = props.genre;

  return (
    <>
      <div className="carousel">
        <div className="movie-banner">
          <Link>
            <img src={backdropUrl(props.banner)} alt="" />
          </Link>
        </div>
        <div className="movie-desc">
          <h1 className="title">
            <Link className="title-carousel">{props.title}</Link>
          </h1>

          <div className="genre-carousel">
            {genreId.map((item) => (
              <p>
                <Link key={item} className="genre-carousel">
                  {item}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
