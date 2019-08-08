import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import roomsElements from '../Room/data';

class Rooms extends Component {

  constructor(){
    super();
    this.state = {
      elements: roomsElements, // array
    }
  }

  componentDidMount(){
    // Executé après le tout premier render
    console.log('Le composant vient d\'être monté');
    this.setState({
      elements: [...this.state.elements.reverse()],
    });
  }

  componentDidUpdate(){
    // Est appelé après tous les autres render
    // -> des que state ou props changent
    console.log('Le composant vient d\'être mis à jour');
  }

  componentWillUnmount(){
    // Juste avant que le composant soit démonté par React
  }

  render() {
    const { elements } = this.state;
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
    );
  }
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