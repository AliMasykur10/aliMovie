import "./ongoing.css";
import Card from "../cards/card";
import { useEffect, useState } from "react";
import axios from "axios";

const Ongoing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US&page=1")
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
      <div className="ongoing">
        <div className="title-ongoing">
          <h1>On Going</h1>
        </div>
        <div className="ongoing-Cards">
          {data.map((item) => (
            <Card key={item.id} title={item.title} poster={item.poster_path} genre={item.genre_ids} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ongoing;
