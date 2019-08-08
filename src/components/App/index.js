
import React from 'react';
import Hello from '../Hello';
import Services from '../Services';
import servicesDatas from '../Services/data';
import Navigation from '../Navigation';
import Testimonies from '../Testimonies';
import Rooms from '../Room';
import navElements from '../Navigation/data';
import roomsElements from '../Room/data';
import DevMobileApp from '../DevMobileApp';
import mobileAppElements from '../DevMobileApp/data';
const App = () => {
    return (
        <div>
            <Navigation mode="horizontal" links={navElements} />
            <Hello name="Toto" />
            <Rooms elements={roomsElements} />
            <Services elements={servicesDatas} />
            <Testimonies />
            <DevMobileApp text="Random text" dataMobileApp={mobileAppElements} />
        </div>
    );
};
export default App;
