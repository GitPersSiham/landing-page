import React from 'react';
import PropTypes from 'prop-types';
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

Services.propTypes = {
    titre: PropTypes.string,
    categorie: PropTypes.string,
}

export default Services;