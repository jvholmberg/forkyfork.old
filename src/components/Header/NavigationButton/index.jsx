import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavigationButton.scss';

const GetClassName = active =>
  `NavigationButton_Container_Item${active ? '_active' : ''}`;

const NavigationButton = props => (
  <li className="NavigationButton_Container">
    <Link className={GetClassName(props.active)} to={props.to}>
      {props.children}
    </Link>
  </li>
);
NavigationButton.defaultProps = {
  active: false,
  to: '/',
  children: React.Element,
};
NavigationButton.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NavigationButton;
