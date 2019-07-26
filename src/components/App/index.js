
import React from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Rooms from '../Room';
import Hello from '../Hello';
import DevMobileApp from '../DevMobileApp';

import navElements from '../Navigation/data';
import roomsElements from '../Room/data';

const App = () => {
  return (
    <div>
      <Navigation links={navElements} />
      <Rooms elements={roomsElements} />
      <About address="55 Times Square Avenue" owner="Bob" swimmingPool={false} />
      <DevMobileApp text="Random text" />
    </div>
  );
};
export default App;
