import React from 'react';
import './index.css';

const About = ({address, owner, swimmingPool}) => {
 
 
  return(
    <div>
        <p>
            <span className="label">Address:</span> {address}
        </p>
        <p>
        <span className="label">Owner:</span> {owner}
        </p>
        <p>{swimmingPool ? 
            "WE HAVE A SWIMMING POOL! YAY!"
        : "We don't have a swimming pool. Go somewhere else."}
        </p>
    </div>
  )
}




export default About;