import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
// import { Card, Feed } from 'semantic-ui-react';

import './index.css';

class Testimonies extends Component {

  urlAPI = 'http://localhost:3000/testimonies'; 

  constructor(props) {
    super(props);
    this.state = {
      testimonies: [],
      current: {}
    };
  }

  componentDidMount() {
    console.log("dans componentDidMount()");
    axios.get(this.urlAPI)
    .then(result => {
      const testimonies = result.data;
      this.setState({ testimonies });
      console.log("state enregistré");
    })
    .catch(error => console.trace(error));
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
    const { testimonies } = this.state;

    return (
      <div className="ui people shape">
          <div className="sides">
            <div className="side active">
            {
              testimonies.map((entry, index) =>
                
                <div key={"testimony" + index} className="ui card">
                  <div className="image">
                    <img src= { entry.avatar } alt="user-avatar" />
                  </div>
                  <div className="content">
                    <div className="header">{ entry.name }</div>
                    <div className="description">
                     { entry.message }
                    </div>
                  </div>
                </div>
              )
            }
            </div>
            <div class="ui buttons">
              <button class="ui button">Previous</button>
              <div class="or" data-text="or"></div>
              <button class="ui positive button">Next</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Testimonies;