import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios';
import { Card, Image, Button } from 'semantic-ui-react'
import MultipleRooms from './MultipleRooms.js';
import SingleRoom from './SingleRoom.js'

class Rooms extends Component {

  constructor(){
    super();
    this.state = {
      elements: [],
      singleRoomView: false,
      currentRoom: null,
      currentRoomsDisplayed: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/rooms").then(res =>{
      let elements = res.data;
      let currentRoomsDisplayed = elements.slice(0, 3);
      this.setState({elements, currentRoomsDisplayed});
    })
  }

  showRoomDetails = (index) => () => {
    let currentRoom = this.state.elements[index];
    this.setState({
      singleRoomView: true,
      currentRoom: currentRoom
    })
  }
  
  hideRoomDetails = () => {
    this.setState({
      singleRoomView: false
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.singleRoomView ?
          <SingleRoom room={this.state.currentRoom} handleChange={this.hideRoomDetails} /> : 
          <MultipleRooms rooms={this.state.currentRoomsDisplayed} handleChange={this.showRoomDetails} />
        }
      </div> 
    );
  }
}

// Rooms.propTypes = {
//   elements: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       image: PropTypes.string,
//       adress: PropTypes.string,
//       id: PropTypes.string,
//       city: PropTypes.string,
//       description: PropTypes.string,
//       night_price: PropTypes.number,
//       currency: PropTypes.string
//     })
//   ),
// };

export default Rooms;