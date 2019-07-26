import React from "react";
import Hello from "../Hello";
import Navigation from "../Navigation/Navigation";

const App = () => {
  const nav_elements = [
    {
      title: "Home",
      url: "#"
    },
    {
      title: "Rooms",
      url: "#"
    },
    {
      title: "Services",
      url: "#"
    },
    {
      title: "About",
      url: "#"
    },
    {
      title: "Mobile App",
      url: "#"
    }
  ];

  return (
    <div>
      <Navigation links={nav_elements} />
    </div>
  );
};
export default App;
