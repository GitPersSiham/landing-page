
import React from 'react';
import Hello from '../Hello';
import Services from '../Services';
import servicesDatas from '../Services/data';
import Navigation from '../Navigation';
import Testimonies from '../Testimonies';
import Rooms from '../Room';
import navElements from '../Navigation/data';
import DevMobileApp from '../DevMobileApp';
import mobileAppElements from '../DevMobileApp/data';
import './index.css';
// Transformer le composant en class
// Utiliser le state pour stocker les données

const App = () => {
    return (
        <div id="app">
            <Navigation mode="horizontal" links={navElements} />
            {/* 
                faire une boucle sur les  datas (du state)
                Pour chaque élément fabriquer une section qui
                affichera la composant demandé
            */}
            <Rooms />
            <Services elements={servicesDatas} />
            <Testimonies />
            <DevMobileApp text="Random text" dataMobileApp={mobileAppElements} />
        </div>
    );
};
export default App;
