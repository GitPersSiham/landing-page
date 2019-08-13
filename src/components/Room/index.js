import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios';
import MultipleRooms from './MultipleRooms.js';
import SingleRoom from './SingleRoom.js'

const Rooms = () => {

  const [state, setState] = useState({
      allRooms: [],
      singleRoomView: false,
      currentRoom: null,
      currentRoomsDisplayed: [],
      currentMiddleDisplayIndex: null,
      displayOffset: null,
      numberOfMultipleRooms: 3
  });

  const fetchRooms = () => {
    axios.get("http://localhost:3000/rooms").then(res =>{
      let allRooms = res.data;
      let currentMiddleDisplayIndex = Math.floor(state.numberOfMultipleRooms / 2);
      let currentRoomsDisplayed = allRooms.slice(0, state.numberOfMultipleRooms);
      let displayOffset = Math.floor(state.numberOfMultipleRooms / 2);
      setState({...state, allRooms, currentRoomsDisplayed, currentMiddleDisplayIndex, displayOffset});
    });
  }

    useEffect(fetchRooms, []);



  const showRoomDetails = (id) => () => {
    let currentRoom;
    state.allRooms.forEach(room => {
      if (room.id === id){
        currentRoom = room;
      }
    });
    setState({
      ...state,
      singleRoomView: true,
      currentRoom: currentRoom
    })
  }
  
  const hideRoomDetails = () => {
    setState({
      ...state,
      singleRoomView: false
    })
  }

  const scroll = (direction) => () => {
    let previousRoomsDisplayed = state.currentRoomsDisplayed;
    let previousMiddleDisplayIndex = state.currentMiddleDisplayIndex;
    let itemTotal = state.allRooms.length;
    let offset = state.displayOffset;
    let currentMiddleDisplayIndex;
    let offsetIndex;
    let currentRoomsDisplayed = previousRoomsDisplayed;
    let newRoom;
    if (direction === "right"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex < itemTotal -1 ? previousMiddleDisplayIndex + 1 : 0;
      offsetIndex = (currentMiddleDisplayIndex + offset < itemTotal) ? (currentMiddleDisplayIndex + offset) : ((currentMiddleDisplayIndex + offset) - itemTotal);
      newRoom = state.allRooms[offsetIndex];
      currentRoomsDisplayed = [...previousRoomsDisplayed.slice(1), newRoom];
    } else if (direction === "left"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex > 0 ? previousMiddleDisplayIndex - 1 : itemTotal - 1;
      offsetIndex = currentMiddleDisplayIndex - offset > -1 ? currentMiddleDisplayIndex - offset : ((itemTotal) + (currentMiddleDisplayIndex - offset))
      newRoom = state.allRooms[offsetIndex];
      currentRoomsDisplayed = [newRoom, ...previousRoomsDisplayed.slice(0, -1)];
    }
    setState({...state, currentRoomsDisplayed, currentMiddleDisplayIndex});
  }

    return (
      <div className="rooms-container">
        {state.singleRoomView ?
          <SingleRoom room={state.currentRoom} handleChange={hideRoomDetails} /> : 
          <MultipleRooms rooms={state.currentRoomsDisplayed} handleChange={showRoomDetails} scrollRightAction={scroll("right")} scrollLeftAction={scroll("left")} />
        }
      </div> 
    );
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