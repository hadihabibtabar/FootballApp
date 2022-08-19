import React from "react";
import Row from "react-bootstrap/Row";
import "./Navbar.css";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import StadiumIcon from "@mui/icons-material/Stadium";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import SportIcon from "@mui/icons-material/SportsSoccer";
import EventIcon from "@mui/icons-material/EmojiEventsOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function Navbar() {
  return (
    <>
      <Row className="navContainer">
        <BottomNavigation
          className="navItemContainer"
          showLabels
          value=""
          onChange={(event, newValue) => {}}
        >
          <BottomNavigationAction
            className="navItem"
            label="پروفایل"
            icon={<AccountIcon />}
          />
          <BottomNavigationAction
            className="navItem"
            label="لیگ ها"
            icon={<EventIcon />}
          />
          <BottomNavigationAction
            className="navItem"
            label="فوتبال"
            icon={<SportIcon />}
          />
          <BottomNavigationAction
            className="navItem"
            label="اکتشاف"
            icon={<ExploreIcon />}
          />
          <BottomNavigationAction
            className="navItem"
            label="مسابقات"
            icon={<StadiumIcon />}
          />
        </BottomNavigation>
      </Row>
    </>
  );
}
export default Navbar;
