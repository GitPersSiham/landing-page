import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Rooms = ({elements}) => {
// le liveshare est toujours là??
return (
  <div className="container">
    {
      elements.map(({name, image,  adress, id, city, description,night_price, currency}) => (
        <div key={id} className="room-list">
          <img src={image} alt={id + "-img"} className="image"/>
          <p><strong>Host</strong>: {name}</p>
          <p><strong>Address</strong>: {adress}</p>
          <p><strong>City</strong>: {city}</p>
          <p><strong>Description</strong>: {description}</p>
          <p><strong>Night price</strong>: {night_price}{currency}</p>
        </div>
      ))
    }
  </div>

)
}

Rooms.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      adress: PropTypes.string,
      id: PropTypes.string,
      city: PropTypes.string,
      description: PropTypes.string,
      night_price: PropTypes.number,
      currency: PropTypes.string
    })
  ).isRequired,
};

export default Rooms;