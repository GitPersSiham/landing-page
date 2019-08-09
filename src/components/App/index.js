<<<<<<< HEAD
=======

>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
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
import './index.css';
// Transformer le composant en class
// Utiliser le state pour stocker les données

const navElements = [
    {
        title: "Rooms",
        name: "rooms",
<<<<<<< HEAD
        Component: Rooms,
        url: "/rooms",
        isActive: true
=======
        Component: Rooms
>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
    },
    {
        title: "Services",
        name: "services",
<<<<<<< HEAD
        Component: Services,
        url: "/services",
        isActive: false
=======
        Component: Services
>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
    },
    {
        title: "Testimonies",
        name: "testimonies",
<<<<<<< HEAD
        Component: Testimonies,
        url: "/testimonies",
        isActive: false
=======
        Component: Testimonies
>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
    },
    {
        title: "DevMobileApp",
        name: "devmobileapp",
<<<<<<< HEAD
        Component: DevMobileApp,
        url: "/devmobileapp",
        isActive: false
=======
        Component: DevMobileApp
>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
    },
];

function App() {
<<<<<<< HEAD
    const [elems, setElems] = useState(navElements)

    return (
        <div id="app">
            <Navigation mode="horizontal" links={navElements} />
            {elems.map(({ title, name, Component }) => (
=======
    const [elements, setElements] = useState([])

    useEffect(() => {
        setElements(navElements)
    }, [])

    return (
        <div>
            <Navigation mode="horizontal" links={elements} />
            {elements.map(({ title, name, Component }) => (
>>>>>>> 8ac866e47faaf92956d277856b3eef550ee587f4
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
