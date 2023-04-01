// import { Link } from "react-router-dom";
import SimpleSlider from "../../components/carousell/carousel";
import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Container />
    </div>
  );
};

export default home;
