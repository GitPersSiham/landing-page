import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios';
import { Card, Image, Button } from 'semantic-ui-react'

class AllRooms extends Component {

  constructor(props){
    super(props);
    this.state = {
      elements: this.props.elements,
      singleRoomView: false,
      currentRoom: null,
    }
  }

//   componentDidMount(){
//     axios.get("http://localhost:3000/rooms").then(res =>{
//       let elements = res.data;
//       this.setState({elements});
//     })
//   }

//   showRoomDetails = (index) => () => {
//     let currentRoom = this.state.elements[index];
//     this.setState({
//       singleRoomView: true,
//       currentRoom: currentRoom
//     })
//   }
  
//   hideRoomDetails = () => {
//     this.setState({
//       singleRoomView: false
//     })
//   }

  render() {
    const { elements } = this.state;
    return (
        <div>
        {
          elements.map(({image,  city, night_price, currency}, index) => (
            <Card>
              <Image src={image} size="small" />
              <Card.Content>
                <Card.Header>
                  City: {city}
                </Card.Header>
              <Card.Description>
                Night price: {night_price}{currency}
              </Card.Description>
            </Card.Content>
            <Button onClick={this.showRoomDetails(index)}>
              Découvrir
            </Button>
            </Card>
          ))
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

export default AllRooms;