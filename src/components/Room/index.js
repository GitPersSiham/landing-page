import React from 'react';
import './index.css';

const Rooms = ({name, address}) => {
  return (
      <div className="room-component">
          <p>Hello : {name}</p>
          <p>Address : {address} </p>
      </div>
    
  )
}

export default Rooms;


