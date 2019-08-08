import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios';
import MultipleRooms from './MultipleRooms.js';
import SingleRoom from './SingleRoom.js'

class Rooms extends Component {

  constructor(){
    super();
    this.state = {
      allRooms: [],
      singleRoomView: false,
      currentRoom: null,
      currentRoomsDisplayed: [],
      currentMiddleDisplayIndex: 0
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/rooms").then(res =>{
      let allRooms = res.data;
      let currentMiddleDisplayIndex = 1;
      let currentRoomsDisplayed = allRooms.slice(0, 3);
      this.setState({allRooms, currentRoomsDisplayed, currentMiddleDisplayIndex});
    })
  }

  showRoomDetails = (index) => () => {
    let currentRoom = this.state.allRooms[index];
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

  scroll = (direction) => () => {
    let previousRoomsDisplayed = this.state.currentRoomsDisplayed;
    let previousMiddleDisplayIndex = this.state.currentMiddleDisplayIndex;
    let currentMiddleDisplayIndex;
    let offsetIndex;
    if (direction === "right"){
      currentMiddleDisplayIndex = (previousMiddleDisplayIndex < (this.state.allRooms.length - 2)) ? previousMiddleDisplayIndex + 1 : 0;
      offsetIndex = currentMiddleDisplayIndex + 1 < this.state.allRooms.length ? currentMiddleDisplayIndex + 1 : 0;
    } else if (direction === "left"){
      currentMiddleDisplayIndex = (previousMiddleDisplayIndex > 1) ? previousMiddleDisplayIndex - 1 : 30;
      offsetIndex = currentMiddleDisplayIndex - 1 > -1 ? currentMiddleDisplayIndex - 1 : 30;
    }
    let currentRoomsDisplayed = previousRoomsDisplayed.slice(1).concat(this.state.allRooms[offsetIndex]);
    this.setState({currentRoomsDisplayed, currentMiddleDisplayIndex});
  }

  render() {
    return (
      <div className="container">
        {this.state.singleRoomView ?
          <SingleRoom room={this.state.currentRoom} handleChange={this.hideRoomDetails} /> : 
          <MultipleRooms rooms={this.state.currentRoomsDisplayed} handleChange={this.showRoomDetails} scrollRightAction={this.scroll("right")} scrollLeftAction={this.scroll("left")} />
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