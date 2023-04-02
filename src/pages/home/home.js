// import { Link } from "react-router-dom";
import SimpleSlider from "../../components/carousell/carousel";
import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Container />
      <Footer />
    </div>
  );
};

export default home;
