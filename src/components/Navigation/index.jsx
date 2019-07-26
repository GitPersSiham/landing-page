import React from "react";
import "./Navigation.css";

const Navigation = ({ links }) => {
  const listItems = links.map(link => (
    <a href={link.url}>
      {link.title}
    </a>
  ));
  return (
    <div className="navigation-bar">
      <ul>{listItems}</ul>
    </div>
  );
};

export default Navigation;
