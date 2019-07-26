import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Hello from '../Hello';
import './index.css';


const DevMobileApp = (props) => (
    <div className="mobile-component">
        <ReactMarkdown source={props.dataMobileApp.title} />
        <ReactMarkdown source={props.dataMobileApp.subtitle} />
        <p>{props.randomText}</p>
    </div>
);

DevMobileApp.propTypes = {
    randomText: PropTypes.string,
    dataMobileApp: PropTypes.array
}

export default DevMobileApp;