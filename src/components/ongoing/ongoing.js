import "./ongoing.css";
import Card from "../cards/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loadingcard from "../loadingCard/loadingCard";

const Ongoing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US&page=1")
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
    return <Loadingcard />;
  }
  if (error) {
    return (
      <div>
        {" "}
        <p>Error : {error}</p>
      </div>
    );
  }
  return (
    <>
      <div className="ongoing">
        <div className="title-ongoing">
          <h1>On Going</h1>
        </div>
        <div className="ongoing-Cards">
          {data.map((item) => (
            <Card key={item.id} title={item.title} poster={item.poster_path} genre={item.genre_ids} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ongoing;
