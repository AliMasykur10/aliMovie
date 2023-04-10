import Card from "../cards/card";
import "./mainContent.css";

const MainContent = (props) => {
  return (
    <>
      <div className="main-content">
        <h1>{props.title}</h1>
        <div className="main-cards">nama</div>
      </div>
    </>
  );
};

export default MainContent;
