import React from "react";
import Navigation from "../Navigation";
import About from "../About";
import Rooms from "../Room";
import Hello from "../Hello";
import navElements from "../Navigation/data";
import roomsElements from "../Room/data";

const App = () => {
  return (
    <div>
      <Navigation mode="horizontal" links={navElements} />
      <Hello name="Toto" />
      <Rooms elements={roomsElements} />
      <About
        address="55 Times Square Avenue"
        owner="Bob"
        swimmingPool={false}
      />
    </div>
  );
};
export default App;
