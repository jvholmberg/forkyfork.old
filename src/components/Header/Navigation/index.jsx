import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Navigation.scss';

const Navigation = () => (
  <nav className="Navigation_Container">
    <ul className="Navigation_Container_List">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Login">Login</Link></li>
    </ul>
  </nav>
);

export default Navigation;
