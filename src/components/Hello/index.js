import React from 'react';
import './index.css';

const Hello = ({ name }) => {

    return (
        <div className="hello-component">
            <p>Hello { name } </p>
        </div>
    );

};
export default Hello;