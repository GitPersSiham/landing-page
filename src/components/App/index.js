import React from 'react';
import Hello from '../Hello';
import About from '../About';


const App = () => (
    <div>
        <Hello />
        <Hello name="tata"/>
        <Hello name="titi" />
        <About address="55 Times Square Avenue" owner="Bob" swimmingPool={true} />
    </div>




);

export default App;