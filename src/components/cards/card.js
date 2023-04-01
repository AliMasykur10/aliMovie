import "./card.css";
import posterFilm from "../../assets/moviePoster.png";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={posterFilm} alt="" />
        <div className="description">
          <h3>Spiderman : The Last of Us</h3>
          <div className="genre-main">
            <p>Action</p>
            <p>Drama</p>
            <p>Romance</p>
            <p>Romance</p>
            <p>Comedy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
