import React from "react";
import "./Navigation.css";
import PropTypes from "prop-types";

const Navigation = ({ links }) => {
  const listItems = links.map((link, index) => (
    <a key={link.title} href={link.url}>
      {link.title}
    </a>
  ));
  return (
    <div className="navigation-bar">
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
