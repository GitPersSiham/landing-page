import React from "react";
import "./Navigation.css";
import PropTypes from "prop-types";

const Navigation = ({ links, mode }) => {
  const listItems = links.map((link, index) => (
    <a
      className={link.isActive ? "item-active" : "item-inactive"}
      key={link.title}
      href={link.url}
      onClick={() => {
        console.log(links[index].title);
      }}
    >
      {link.title}
    </a>
  ));

  let navbarClasses = "navigation-bar ";

  if (mode === "vertical") {
    navbarClasses += "navigation-vertical";
  } else {
    navbarClasses += "navigation-horizontal";
  }

  console.log(mode);

  return (
    <div className={navbarClasses}>
      <ul>{listItems}</ul>
    </div>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
