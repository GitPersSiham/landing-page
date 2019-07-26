import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
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
    dataMobileApp: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    })
}

export default DevMobileApp;