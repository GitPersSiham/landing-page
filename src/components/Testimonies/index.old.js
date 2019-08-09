
import React, { Component, useEffect } from 'react';
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
      //console.log("state enregistré");
    })
    .catch(error => console.trace(error));
  }

  handleClick = (direction) => () => {
 
    console.log(direction);
 
    if (direction === 'right') {
      this.setState({

      })

      } else {

      }
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
            <div className="ui buttons"> 
              <button className="ui button" onClick={this.handleClick('left')} ><i aria-hidden="true" className="left arrow icon"></i>Previous
                
              </button>
              <div className="or" data-text=""></div>
              <button className="ui button" onClick={this.handleClick('right')}>Next
                <i aria-hidden = "true" className = "right arrow icon" > </i>
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Testimonies;