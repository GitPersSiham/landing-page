import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./MobileApp.css";
/* import PropTypes from "prop-types";
 */

 const MobileApp = () => {

  useEffect(() => {
    console.log('useEffect');
    axios
    .get('http://localhost:3000/features')
    .then(res => {
      console.log(res.data);
      const features = res.data;
      setFeatures(features);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const [featureToShow, setFeatureToShow] = useState(0);

  const [features, setFeatures] = useState([]);

  const feature = features[featureToShow] || {};

  const handleClick = button => () => {
    const currentIndex = featureToShow;

    if (button === "previous"){

      if (currentIndex === 0) {

        return setFeatureToShow(features.length - 1)

      } else {

        return setFeatureToShow(featureToShow - 1)

      }

    } else {

      if (currentIndex === (features.length -1))

        return setFeatureToShow(0)

      else {

        return setFeatureToShow(featureToShow + 1)

      }
      
    }
  }

  return (
    <div 
      className="container" 
      style = {{backgroundImage:`url(${feature.background})`}}
    >
      <button
        onClick={handleClick("previous")}
      >
        Précédent
      </button>
      {feature.title}
      {feature.message}
      <button
        onClick={handleClick("next")}
      >
        Suivant
      </button>
    </div>
  );
}



/* MobileApp.propTypes = {

}; */

export default MobileApp;
