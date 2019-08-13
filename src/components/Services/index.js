import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    getCategoriesList = () => {
        const { items } = this.state;
        const categories = items.reduce((acc, item)=>{
            return {
                ...acc,
                [item.category]: true
            }
        }, {});
        return Object.keys(categories);
    }

    getServicesFromCategory = (category) => {
        // Faire le code qui renvoie un tableau filté
        return this.state.items.filter(item => item.category === category);
    }

    componentDidMount() {
        fetch("http://localhost:3000/services")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {

            return (

                <div className="service-component">
                    {
                        this.getCategoriesList().map(category => (
                            <div className="service-container" key={category}>
                                <h3 className="title">{category}</h3>
                                <ul>
                                {
                                    this.getServicesFromCategory(category).map(service => (
                                        <li key={service.title}>{service.title}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        ))
                    }

                </div>


            )

        }
    }

}
Services.propTypes = {
    titre: PropTypes.string,
    categorie: PropTypes.string,
}


export default Services;