import "./card.css";
import posterFilm from "../../assets/moviePoster.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <Link className="poster-film">
          <img src={posterFilm} alt="" />
        </Link>
        <div className="description">
          <h3>
            <Link className="judul-film">Spiderman : The Last of Us</Link>
          </h3>
          <div className="genre-main">
            <p>
              <Link className="genre-cards"> Action </Link>
            </p>
            <p>
              <Link className="genre-cards"> Drama </Link>
            </p>
            <p>
              <Link className="genre-cards"> Romance </Link>
            </p>
            <p>
              <Link className="genre-cards"> Comedy </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
