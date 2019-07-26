
import React from 'react';
import Hello from '../Hello';
import Services from '../Services';
import servicesDatas from '../Services/data';
import Navigation from '../Navigation';
import About from '../About';
import Rooms from '../Room';
import navElements from '../Navigation/data';
import roomsElements from '../Room/data';
import markdown from '../About/data';

const App = () => {
    return (
        <div>
            <Navigation mode="horizontal" links={navElements} />
            <Hello name="Toto" />
            <Rooms elements={roomsElements} />
            <Services elements={servicesDatas} />
            <About markdown={markdown}  />
        </div>
    );
};
export default App;
