import React from 'react';
import './index.css';

const Services = ({ elements }) => {
    return (
        <div className="service-component">
            {
                elements.map(({ id, titre, categorie }) => (
                    <div class="container" key={id}>
                        <p class="title">{id} : {titre}</p>
                        <p class="categorie">Categorie : {categorie} </p>
                    </div>
                ))
            }
        </div>

    )
}
export default Services;