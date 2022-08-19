import React from "react";
import { Tab, Tabs } from "@mui/material";

function Scroller() {
  return( 
  <>
  <Tabs
//  value={value}
//  onChange={handleChange}
textColor="secondary"
  indicatorColor="secondary"
 variant="scrollable"
 scrollButtons={false}
 aria-label=""
>
  <Tab label="دیروز" active/>
  <Tab label="امروز" />
  <Tab label="فردا" />
  <Tab label="جمعه" />
  <Tab label="31 خرداد" />
  <Tab label="Item Six" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
  <Tab label="Item Seven" />
</Tabs>
  </>
  );
}

export default Scroller;