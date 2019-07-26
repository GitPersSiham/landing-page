import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import './index.css';

const About = ({markdown}) => {
 
 
  return(
    <div>
        <ReactMarkdown source={markdown} />
    </div>
  )
}

About.propTypes = {
  markdown: PropTypes.string.isRequired,
};


export default About;