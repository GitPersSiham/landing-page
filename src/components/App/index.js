
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
        Component: Rooms
    },
    {
        title: "Services",
        name: "services",
        Component: Services
    },
    {
        title: "Testimonies",
        name: "testimonies",
        Component: Testimonies
    },
    {
        title: "DevMobileApp",
        name: "devmobileapp",
        Component: DevMobileApp
    },
];

function App() {
    const [elements, setElements] = useState([])

    useEffect(() => {
        setElements(navElements)
    })

    return (
        <div>
            <Navigation mode="horizontal" links={elements} />
            {elements.map(({ title, name, Component }) => (
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
