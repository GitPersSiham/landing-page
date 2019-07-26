import React from 'react';
import Hello from '../Hello';
import Rooms from '../Rooms';

const App = () => (
    <div>
        <Rooms 
            name = {elements[0].name} 
            address = {element[0].adress}
        />
        <Rooms 
            name = {elements[1].name} 
            address = {element[1].adress}
        />
        
        <Hello />
        <Hello name="tata"/>
        <Hello name="titi" />
    </div>
    
);

const elements = [
    {
    
        "id": "109399ff-310f-4141-a5c5-8405c648fba0",
        "name": "Stroman, Kertzmann and Hayes",
        "image": "http://placeimg.com/1024/768/arch?a=0",
        "adress": "885 Corkery Key",
        "city": "Port Martina",
        "description": "Quaerat quis et perspiciatis eum. Molestias quae et sunt. Tenetur sunt quaerat eaque cupiditate vero dignissimos rerum impedit. Quia qui impedit eum et maxime. Eum ipsa nemo nostrum. Enim vel hic perspiciatis quia.",
        "night_price": 2504.8,
        "currency": "€"
    },
    {
        "id": "6fbe024f-2316-4265-a6e8-d65a837e308a",
        "name": "Zieme - Reichel",
        "image": "http://placeimg.com/1024/768/arch?a=1",
        "adress": "9790 Zulauf Creek",
        "city": "Port Mina",
        "description": "Quisquam recusandae alias consequuntur corporis repellat ratione ut sunt qui. Iure ut libero qui. Ut nulla quam ipsam nobis cupiditate sed dignissimos debitis incidunt. Sed libero repudiandae.",
        "night_price": 4170.2,
        "currency": "€"
    }
]

export default App;