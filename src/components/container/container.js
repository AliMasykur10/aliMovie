import Ongoing from "../ongoing/ongoing";
import TopMovie from "../topMovie/topMovie";
import "./container.css";

const Container = (props) => {
  return (
    <>
      <div className="container">
        <Ongoing />
        <TopMovie />
      </div>
    </>
  );
};

export default Container;
