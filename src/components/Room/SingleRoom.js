import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Card, Image, Button, Icon } from 'semantic-ui-react'

class MultipleRooms extends Component {

  render() {
    return (
      <Card>
        <Image src={this.props.room.image} size="small" centered />
        <Card.Content>
          <Card.Header>Name: {this.props.room.name}</Card.Header>
            <Card.Description>
              <p>City: {this.props.room.city}</p>
              <p>Address: {this.props.room.adress}</p>
              <p>Night price: {this.props.room.night_price}</p>
              <p>Information: {this.props.room.description}</p>
            </Card.Description>
            <Button onClick={this.props.handleChange}>
              <Button.Content><Icon name='window close' /></Button.Content>
            </Button>
        </Card.Content>
      </Card> 
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

export default MultipleRooms;