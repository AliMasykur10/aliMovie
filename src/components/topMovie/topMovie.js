import "./topMovie.css";
import Card from "../cards/card.js";
import { useEffect, useState } from "react";
import axios from "axios";

const TopMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(" https://api.themoviedb.org/3/movie/top_rated?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US&page=1")
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <>
      <div className="top-movie">
        <div className="title-topMovie">
          <h1>Top Movie</h1>
        </div>
        <div className="topMovieCard">
          {data.map((item) => (
            <Card key={item.id} title={item.title} poster={item.poster_path} genre={item.genre_ids} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMovie;
