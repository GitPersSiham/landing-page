
import React from 'react';
import Hello from '../Hello';
import Services from '../Services';
import Navigation from '../Navigation';
import About from '../About';
import Rooms from '../Room';
import navElements from '../Navigation/data';
import roomsElements from '../Room/data';

const ServicesArray = [
    {
        id: 1,
        titre: "J'ai du linge à laver ",
        categorie: 'linge',
    },
    {
        id: 2,
        titre: "J'ai du linge à repasser",
        categorie: 'linge',
    },
    {
        id: 3,
        titre: "J'ai besoin de vêtements",
        categorie: 'linge',
    },
    ,
    {
        id: 4,
        titre: " J'ai envie d'un restaurant un",
        categorie: 'repas',
    },
    {
        id: 5,
        titre: ' Je voudrais me faire livrer ',
        categorie: 'repas',
    },
    {
        id: 6,
        titre: ' Je voudrais booker un chef ',
        categorie: 'repas',
    }
];


const App = () => {
    return (
        <div>
            <Hello />
            <Hello name="tata" />
            <Hello name="titi" />



            <Services
                titre={ServicesArray[1].titre}
                categorie={ServicesArray[1].categorie}
            />

            <Navigation links={navElements} />
            <Rooms elements={roomsElements} />
            <About address="55 Times Square Avenue" owner="Bob" swimmingPool={false} />
        </div>
    );
};
export default App;
