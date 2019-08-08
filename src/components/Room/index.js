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
      currentMiddleDisplayIndex: null,
      displayOffset: null,
      numberOfMultipleRooms: 3
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/rooms").then(res =>{
      let allRooms = res.data;
      let currentMiddleDisplayIndex = Math.floor(this.state.numberOfMultipleRooms / 2);
      let currentRoomsDisplayed = allRooms.slice(0, this.state.numberOfMultipleRooms);
      let displayOffset = Math.floor(this.state.numberOfMultipleRooms / 2);
      this.setState({allRooms, currentRoomsDisplayed, currentMiddleDisplayIndex, displayOffset});
    })
  }

  showRoomDetails = (id) => () => {
    let currentRoom;
    this.state.allRooms.forEach(room => {
      if (room.id === id){
        currentRoom = room;
      }
    });
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
    let itemTotal = this.state.allRooms.length;
    let offset = this.state.displayOffset;
    let currentMiddleDisplayIndex;
    let offsetIndex;
    let currentRoomsDisplayed = previousRoomsDisplayed;
    let newRoom;
    if (direction === "right"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex < itemTotal -1 ? previousMiddleDisplayIndex + 1 : 0;
      offsetIndex = (currentMiddleDisplayIndex + offset < itemTotal) ? (currentMiddleDisplayIndex + offset) : ((currentMiddleDisplayIndex + offset) - itemTotal);
      newRoom = this.state.allRooms[offsetIndex];
      currentRoomsDisplayed = [...previousRoomsDisplayed.slice(1), newRoom];
    } else if (direction === "left"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex > 0 ? previousMiddleDisplayIndex - 1 : itemTotal - 1;
      offsetIndex = currentMiddleDisplayIndex - offset > -1 ? currentMiddleDisplayIndex - offset : ((itemTotal) + (currentMiddleDisplayIndex - offset))
      newRoom = this.state.allRooms[offsetIndex];
      currentRoomsDisplayed = [newRoom, ...previousRoomsDisplayed.slice(0, -1)];
    }
    console.log({offset, currentMiddleDisplayIndex, offsetIndex});
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