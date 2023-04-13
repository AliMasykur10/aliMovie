import "./card.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  const [data, setData] = useState([]);

  const moviePoster = `https://www.themoviedb.org/t/p/w440_and_h660_face${props.poster}`;

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US")
      .then((res) => setData(res.data.genres))
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const genreId = props.genre;

  const dataGenre = genreId.map((item) => {
    const genreName = data.find((obj) => obj.id === item)?.name;
    return <p key={item}>{genreName}</p>;
  });

  return (
    <>
      <div className="card">
        <Link className="poster-film">
          <img src={moviePoster} alt="" />
        </Link>
        <div className="description">
          <h3>
            <Link className="judul-film" title={props.title}>
              {props.title}
            </Link>
          </h3>
          <div className="genre-main">{dataGenre}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
