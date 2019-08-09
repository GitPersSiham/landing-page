import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Card, Feed } from 'semantic-ui-react';
import './index.css';

const urlAPI = 'http://localhost:3000/testimonies'; 


const Testimonies = () => {

  useEffect(() => {
    axios.get(urlAPI)
      .then(result => {
        const testimonies = result.data;
        console.log({testimonies});
        setTestimonies({ 
          ...testimonies,
           name: testimonies.name + '!',
           message: testimonies.message + '!',
        });
        //console.log("state enregistré");
      })
      .catch(error => console.error(error));
  }, []);

  const [testimonies, setTestimonies] = useState([]);


 const {name, avatar, message} = testimonies;

  return (
    <div className="ui people shape">
        <div className="sides">
          <div className="side active">

              <div className="ui card">
                <div className="image">
                  <img src= { avatar } alt="user-avatar" />
                </div>
                <div className="content">
                  <div className="header">{ name }</div>
                  <div className="description">
                   { message }
                  </div>
                </div>
              </div>
            
          
          </div>
          <div className="ui buttons"> 
            <button className="ui button" ><i aria-hidden="true" className="left arrow icon"></i>Previous
              
            </button>
            <div className="or" data-text=""></div>
            <button className="ui button">Next
              <i aria-hidden = "true" className = "right arrow icon" > </i>
            </button>
          </div>
        </div>
      </div>
  );
}

export default Testimonies;