import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react'

const SingleRoom = (props) => {
    return (
      <Card>
        <Image src={props.room.image} size="small" centered />
        <Card.Content>
          <Card.Header>Name: {props.room.name}</Card.Header>
            <Card.Description>
              <p>City: {props.room.city}</p>
              <p>Address: {props.room.adress}</p>
              <p>Night price: {props.room.night_price}</p>
              <p>Information: {props.room.description}</p>
            </Card.Description>
            <Button onClick={props.handleChange}>
              <Button.Content><Icon name='window close' /></Button.Content>
            </Button>
        </Card.Content>
      </Card> 
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

export default SingleRoom;