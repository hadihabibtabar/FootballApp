import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";

import AnalogClock from "analog-clock-react";

function Header() {
  let options = {
    width: "35px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#fafafa",
    centerColor: "#000000",
    centerBorderColor: "#fafafa",
    handColors: {
      second: "#d81c7a",
      minute: "#000000",
      hour: "#000000",
    },
  };
  return (
    <>
      <Row className="footballHeader">
        <Row>
          <Col xs={6} className="upHeader">
            <h3 className="title">نتایج زنده</h3>
          </Col>

          <Col xs={6} className="clock">
            <AnalogClock {...options} />
          </Col>
        </Row>
        <Row className="searchBox">
          <input type="search" placeholder="جستجو..." className="searchInput" />
        </Row>
      </Row>
    </>
  );
}
export default Header;
