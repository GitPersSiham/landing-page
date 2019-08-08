import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Card, Image, Button } from 'semantic-ui-react'

class MultipleRooms extends Component {

  render() {
    return (
        <Card.Group>
          <Button onClick={this.props.scrollLeftAction}>Left</Button>
          {this.props.rooms.map(({image, city, night_price, currency, id}) => (
            <Card>
              <Image src={image} size="small" />
              <Card.Content>
                <Card.Header>City: {city}</Card.Header>
                <Card.Description>Price per night: {night_price}{currency}</Card.Description>
                <Button onClick={this.props.handleChange(id)}>Learn more</Button>
              </Card.Content>
            </Card>
          )) }
          <Button onClick={this.props.scrollRightAction}>Right</Button>
        </Card.Group> 
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