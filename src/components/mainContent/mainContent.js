import Card from "../cards/card";
import "./mainContent.css";

const MainContent = (props) => {
  const loopingCard = [];
  for (let i = 1; i <= 10; i++) {
    loopingCard.push(<Card />);
  }
  return (
    <>
      <div className="main-content">
        <h1>{props.data}</h1>
        <div className="main-cards">{loopingCard}</div>
      </div>
    </>
  );
};

export default MainContent;
