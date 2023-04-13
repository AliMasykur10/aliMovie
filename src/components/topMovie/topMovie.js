import "./topMovie.css";
import Card from "../cards/card.js";
import { useEffect, useState } from "react";
import axios from "axios";

const TopMovie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(" https://api.themoviedb.org/3/movie/top_rated?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US&page=1")
      .then((res) => {
        // console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="top-movie">
        <div className="title-topMovie">
          <h1>Top Movie</h1>
        </div>
        <div className="topMovieCard">
          {data.map((item) => (
            <Card key={item.id} title={item.title} poster={item.poster_path} genre={item.genre_ids} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMovie;
