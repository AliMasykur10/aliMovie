import { useEffect, useState } from "react";
import "./carousel-item.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Carousel = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US")
      .then((res) => setData(res.data.genres))
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const backdropUrl = (backdropPath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${backdropPath}`;
  };

  const genreId = props.genre;

  const dataGenre = genreId.map((item) => {
    const genreName = data.find((obj) => obj.id === item)?.name;
    return <p key={item}>{genreName}</p>;
  });

  return (
    <>
      <div className="carousel">
        <div className="movie-banner">
          <Link to={`/desc/${props.id}`}>
            <img src={backdropUrl(props.banner)} alt="" title={props.title} />
          </Link>
        </div>
        <div className="movie-desc">
          <h1 className="title">
            <Link to={`/desc/${props.id}`} className="title-carousel" title={props.title}>
              {props.title}
            </Link>
          </h1>

          <div className="genre-carousel">{dataGenre}</div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
