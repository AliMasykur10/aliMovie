import { Link } from "react-router-dom";
import Carousell from "../../components/carousell/carousell";
import Navbar from "../../components/navbar/navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <Carousell />
    </div>
  );
};

export default home;
