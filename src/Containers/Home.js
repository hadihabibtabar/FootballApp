import React from "react";
import Row from "react-bootstrap/Row";
import FootballDetails from "../Components/FootballDetails";
import Scroller from "../Components/Scroller";
import "./Home.css";

function Home() {
  return (
    <>
      <Row className="scrollBar">
        <Scroller />
      </Row>
      <div>
        <FootballDetails />
      </div>
    </>
  );
}
export default Home;
