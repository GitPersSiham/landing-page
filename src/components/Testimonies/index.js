import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Card, Feed } from 'semantic-ui-react';
import './index.css';
import { Button, Modal } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';

const urlAPI = 'http://localhost:3000/testimonies'; 

const Testimonies = () => {

  useEffect(() => {
    axios.get(urlAPI)
      .then(result => {
        const testimonies = result.data;
        setTestimonies(testimonies);
      })
      .catch(error => console.error(error));
  }, []);

  const [testimonies, setTestimonies] = useState([]);

  const [testimonieIndex, changeTestimonie] = useState(0);

  const handleClick = value => () => {
    const newValue = 
      testimonieIndex === 0 && value === -1 ? testimonies.length -1    // si index === 0 et value === -1 on va à la dernière case du tableau
    : testimonieIndex === testimonies.length -1 && value === +1 ? 0    // sinon si index === dernière case et value === +1 on renvoie 0 (début)
    : testimonieIndex + value;                                         // sinon testimonieIndex + value
    changeTestimonie(newValue);
  }

 
  if (testimonies[testimonieIndex]) {
    const { name, avatar, message } = testimonies[testimonieIndex];
    return (
      <div className="ui people shape">
        <div className="sides">
          <div className="side active">
              <div className="ui card">
                <div className="image">
                  <img src= { avatar } alt="user-avatar" />
                </div>
                <div className="content">
                  <div className="header">
                    { name }
                  </div>
                  <div className="description">
                    { message }
                  </div>
                </div>
              </div>
          </div>
          <div className="ui buttons"> 
            <button className="ui button" onClick={handleClick(-1)}>
              <i aria-hidden="true" className="left arrow icon"></i>Previous
            </button>
            <div className="or" data-text=""></div>
            <button className="ui button" onClick={handleClick(1)}>
              Next<i aria-hidden = "true" className = "right arrow icon" > </i>
            </button>
          </div>
        </div>
          
        <Modal trigger={<Button>Ajouter un avis</Button>}>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <label>Avatar</label>
              <input placeholder='Avatar' />
            </Form.Field>
            <Form.Field>
              <label>Message</label>
              <textarea placeholder="Votre message"></textarea>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal>   
      </div>
      );
  } else return 0;
 
}

export default Testimonies;