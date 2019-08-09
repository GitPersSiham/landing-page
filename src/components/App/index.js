import React, { useState, useEffect } from 'react';
import Hello from '../Hello';
import Services from '../Services';
import servicesDatas from '../Services/data';
import Navigation from '../Navigation';
import Testimonies from '../Testimonies';
import Rooms from '../Room';
// import navElements from '../Navigation/data';
import DevMobileApp from '../DevMobileApp';
import mobileAppElements from '../DevMobileApp/data';

// Transformer le composant en class
// Utiliser le state pour stocker les données

const navElements = [
    {
        title: "Rooms",
        name: "rooms",
        Component: Rooms,
        url: "/rooms",
        isActive: true
    },
    {
        title: "Services",
        name: "services",
        Component: Services,
        url: "/services",
        isActive: false
    },
    {
        title: "Testimonies",
        name: "testimonies",
        Component: Testimonies,
        url: "/testimonies",
        isActive: false
    },
    {
        title: "DevMobileApp",
        name: "devmobileapp",
        Component: DevMobileApp,
        url: "/devmobileapp",
        isActive: false
    },
];

function App() {
    const [elems, setElems] = useState(navElements)

    return (
        <div>
            <Navigation mode="horizontal" links={navElements} />
            {elems.map(({ title, name, Component }) => (
                <section id={name} key={name}>
                    <Component /> 
                </section>
            ))}
            <Rooms />
            <Services elements={servicesDatas} />
            <Testimonies />
            <DevMobileApp text="Random text" dataMobileApp={mobileAppElements} />
        </div>
    );
};
export default App;
