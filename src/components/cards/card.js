import "./card.css";
// import posterFilm from "../../assets/moviePoster.png"
import { Link } from "react-router-dom";

const Card = (props) => {
  const moviePoster = `https://www.themoviedb.org/t/p/w440_and_h660_face/ovM06PdF3M8wvKb06i4sjW3xoww.jpg${props.poster}`;
  console.log(props.poster);
  return (
    <>
      <div className="card">
        <Link className="poster-film">
          <img src={moviePoster} alt="" />
        </Link>
        <div className="description">
          <h3>
            <Link className="judul-film">{props.title}</Link>
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
