import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/cards/card";
import "./search.css";
import Loadingcard from "../../components/loadingCard/loadingCard";
import Footer from "../../components/footer/footer";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/multi?api_key=583d1254a47fb88b9235f87dacba82e4&language=en-US&query=${query}&include_adult=false`)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [query]);

  if (loading) {
    return <Loadingcard />;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }

  console.log(data);
  return (
    <>
      <div className="search-movie">
        <Navbar />
        <div class="search-result">
          {data.map((item) => (
            <Card key={item.id} title={item.title} name={item.name} poster={item.poster_path} genre={item.genre_ids} id={item.id} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
