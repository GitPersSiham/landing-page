import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react'

const SingleProduct = (props) => {
    return (
      <Card>
        <Image src={props.product.image} size="small" centered />
        <Card.Content>
          <Card.Header>Name: {props.product.name}</Card.Header>
            <Card.Description>
              <p>Address: {props.product.adress}</p>
              <p>Night price: {props.product.night_price}</p>
              <p>Information: {props.product.description}</p>
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

export default SingleProduct;