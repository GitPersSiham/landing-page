import React from 'react';
import './index.css';

const Rooms = ({elements}) => {
// le liveshare est toujours là??
return (
<div className="room-component">
<ul>
{
elements.map(({name, adress, id}) => (
<li key={id}>
<p>Hello : {name}</p>
<p>Address : {adress} </p>
</li>
))
}
</ul>
</div>

)
}

export default Rooms;