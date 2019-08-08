import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "tata",
      age: 37,
      young: true
    };
  }

  handleClick = () => {
    console.log('clic');
    // J'aimerais modifier mon state
    // J'utilise setState
    // qui attend en param un objet représentant
    // les modifs à apporter dans le state
    this.setState({
      toto: "Une nouvelle valeur",
    });
  }
  
  render(){
    // Tout ce que je return ici sera affiché

    const { toto } = this.state;
    return (
      <div id="testimonies">
        <h1 onClick={this.handleClick}>Testimonies</h1>
        <p>
          { toto }
        </p>
      </div>
    );
  }
}

export default Testimonies;