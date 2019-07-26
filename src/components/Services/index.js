import React from 'react';
import './index.css';

const Services = ({ titre, categorie }) => {
    return (
        <div className="services-component">
            <h2 class="categorie">{categorie}</h2>
            <p class="title">{titre}</p>
        </div>
    );
};
export default Services;