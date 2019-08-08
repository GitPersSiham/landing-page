import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "tata",
      age: 37,
      young: false
    };
  }

  handleClick = (text) => () => {
    // handleClick est executée en recevant un param
    // lors de la fabrication de mes h1 (3 fois)
    // A chaque exécution, je renvoie une nouvelle fonction
    // qui sera executée au clic sur un h1 donné (tata, toto, tutu).
    // Et c'est cette fonction retournée qui se charge de faire la
    // modif dans le state avec le bon paramètre
    console.log('clic');
    // J'aimerais modifier mon state
    // J'utilise setState
    // qui attend en param un objet représentant
    // les modifs à apporter dans le state
    this.setState({
      toto: text,
    });
  }


  
  render(){
    // Tout ce que je return ici sera affiché

    const { toto } = this.state;
    return (
      <div id="testimonies">
        <h1 onClick={this.handleClick("titi")}>Titi</h1>
        <h1 onClick={this.handleClick("tata")}>Tata</h1>
        <h1 onClick={this.handleClick("tutu")}>Tutu</h1>
        <p>
          { toto }
        </p>
      </div>
    );
  }
}

export default Testimonies;