
import React from 'react';
import Navigation from '../Navigation';
import About from '../About';

import navElements from '../Navigation/data';

const App = () => {
  return (
    <div>
      <Navigation links={navElements} />
      <About address="55 Times Square Avenue" owner="Bob" swimmingPool={false} />
    </div>
  );
};
export default App;
