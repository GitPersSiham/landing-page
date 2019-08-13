import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./MobileApp.css";
import { Button } from 'semantic-ui-react';

const MobileApp = () => {

  const fetchData = () => {
    axios
      .get('http://localhost:3000/features')
      .then(res => {
        const features = res.data;
        setFeatures(features);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(fetchData, []);

  const [featureToShow, setFeatureToShow] = useState(0);

  const [features, setFeatures] = useState([]);

  const feature = features[featureToShow] || {};

  const handleClick = button => () => {
    const currentIndex = featureToShow;

    if (button === "previous") {

      if (currentIndex === 0) {

        return setFeatureToShow(features.length - 1)

      } else {

        return setFeatureToShow(featureToShow - 1)

      }

    } else {

      if (currentIndex === (features.length - 1))

        return setFeatureToShow(0)

      else {

        return setFeatureToShow(featureToShow + 1)

      }

    }
  }

  const { background, title, message } = feature;

  return (
    <div
      className="mobile-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Button
        onClick={handleClick("previous")}
      >
        Précédent
      </Button>
      <div className="mobile-content">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
      <Button
        onClick={handleClick("next")}
      >
        Suivant
      </Button>
    </div>
  );
}



/* MobileApp.propTypes = {

}; */

export default MobileApp;
