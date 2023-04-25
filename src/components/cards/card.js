import "./card.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loadingcard from "../loadingCard/loadingCard";

const Card = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const moviePoster = `https://www.themoviedb.org/t/p/w440_and_h660_face${props.poster}`;

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US")
      .then((res) => {
        setData(res.data.genres);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  const ListGenre = ({ genreId }) => {
    if (genreId === undefined) {
      return <p> null </p>;
    } else {
      return genreId.map((item) => {
        const genreName = data.find((obj) => obj.id === item)?.name;
        return <p key={item}>{genreName}</p>;
      });
    }
  };

  if (loading) {
    return <Loadingcard />;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <>
      <div className="card">
        <Link to={`/desc/${props.id}`} className="poster-film">
          <img src={moviePoster} alt="" />
        </Link>
        <div className="description">
          <h3>
            <Link to={`/desc/${props.id}`} className="judul-film" title={props.title}>
              {props.title} {props.name}
            </Link>
          </h3>
          <div className="genre-main">
            <ListGenre genreId={props.genre} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
