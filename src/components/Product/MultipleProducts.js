import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react'

const MultipleProducts = (props) => {
    return (
        <Card.Group >
          <Button onClick={props.scrollLeftAction}>
            <Button.Content><Icon name='chevron circle left' /></Button.Content>
          </Button>
          {props.products.map(({image, night_price, currency, id}) => (
            <Card key={id}>
              <Image src={image} size="small" centered />
              <Card.Content>
                <Card.Description>Price per night: {night_price}{currency}</Card.Description>
                <Button onClick={props.handleChange(id)}>Learn more</Button>
              </Card.Content>
            </Card>
          )) }
          <Button onClick={props.scrollRightAction}>
            <Button.Content><Icon name='chevron circle right' /></Button.Content>
          </Button>
        </Card.Group> 
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

export default MultipleProducts;