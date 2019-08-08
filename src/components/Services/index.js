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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {

            return (

                <div className="service-component">
                    {
                        items.map(item => (
                            <div className="service-container" key={item.id}>
                                <p className="title">{item.id} : {item.title}</p>
                                <p className="categorie">Categorie : {item.category} </p>
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