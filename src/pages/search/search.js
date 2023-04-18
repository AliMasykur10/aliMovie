import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  return (
    <>
      <Navbar />
      <h1>{query}</h1>
    </>
  );
};

export default Search;
