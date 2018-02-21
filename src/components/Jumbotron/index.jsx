import React from 'react';
import PropTypes from 'prop-types';

import './Jumbotron.scss';

const GetClassName = ({ extension, unique }) =>
  `Jumbotron_Container${extension || ''} ${unique || ''}`;

const Jumbotron = ({ unique, title, text }) => (
  <div className={GetClassName({ unique })}>
    <h2 className={GetClassName({ extension: '_Title' })}>{ title }</h2>
    { text ? <p className={GetClassName({ extension: '_Text' })}>{ text }</p> : {} }
  </div>
);
Jumbotron.defaultProps = {
  unique: '',
  title: null,
  text: null,
};
Jumbotron.propTypes = {
  unique: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Jumbotron;
