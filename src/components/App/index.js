import React, { useState, useEffect } from 'react';
import Services from '../Services';
import Navigation from '../Navigation';
import Testimonies from '../Testimonies';
import Rooms from '../Room';
import MobileApp from '../MobileApp';
import './index.css';

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
        Component: MobileApp
    },
];

function App() {
    const [elements, setElements] = useState([])

    useEffect(() => {
        setElements(navElements)
    }, [])

    return (
        <div>
            <Navigation mode="horizontal" links={elements} />
            {elements.map(({ title, name, Component }) => (
                <section id={name} key={name}>
                    <Component /> 
                </section>
            ))}
        </div>
    );
};
export default App;
