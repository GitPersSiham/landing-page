
import React, { Component } from 'react';
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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: navElements
        };
    }
    render() {
        return (
            <div>
                <Navigation mode="horizontal" links={this.state.navElements} />
                {this.state.elements.map(({ title, name, Component }) => (
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
    }
};
export default App;
