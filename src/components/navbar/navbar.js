import "./navbar.css";
import myLogo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={myLogo} alt="Ali Movie" className="my-logo" />
          </Link>
        </div>
        <div className="search-bar">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search Movie..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
