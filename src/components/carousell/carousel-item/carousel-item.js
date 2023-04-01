import "./carousel-item.css";
import banner from "../../../assets/bannerFilm.png";

const Carousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="movie-banner">
          <img src={banner} alt="" />
        </div>
        <div className="movie-desc">
          <h1 className="title">Spiderman : The Last of Us</h1>
          <div className="genre-carousel">
            <p>Action</p>
            <p>Drama</p>
            <p>Romance</p>
            <p>Comedy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
