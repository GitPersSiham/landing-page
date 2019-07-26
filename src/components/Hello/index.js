import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Hello = ({ name }) => {

    return (
        <div className="hello-component">
            <p>Hello { name } </p>
        </div>
    );

};



Hello.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Hello;