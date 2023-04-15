import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./details.css";

const DetailMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }

  const posterMovie = `https://www.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`;

  const genreLooping = data.genres;

  return (
    <>
      <div className="details">
        <div className="details-poster">
          <img src={posterMovie} alt="" />
        </div>
        <div className="movie-details">
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <div className="genre-details">
            {genreLooping.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
          <p>popularity : {data.popularity}</p>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
