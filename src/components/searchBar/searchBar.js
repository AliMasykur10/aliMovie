import { useState } from "react";
import searchIcon from "../../assets/search-icon.png";
import "./searchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnchange = (event) => {
    setSearchTerm(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm(" ");
  }

  return (
    <>
      <div className="search-bar">
        <form action="" onSubmit={handleSubmit}>
          <input type="image" src={searchIcon} alt="Submit" className="button-search" />
          <input type="text" placeholder="Search Movie..." className="input-search" onChange={handleOnchange} />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
