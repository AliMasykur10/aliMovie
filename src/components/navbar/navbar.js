import "./navbar.css";
import myLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={myLogo} alt="Ali Movie" className="my-logo" title="Ali Movie" />
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
