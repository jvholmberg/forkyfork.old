import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavigationButton.scss';

const GetClassName = active =>
  `NavigationButton_Container_Item${active ? '_active' : ''}`;

const NavigationButton = (props) => {
  const { children, to, current } = props;
  return (
    <li className="NavigationButton_Container">
      <Link className={GetClassName(current === to)} to={to}>
        {children}
      </Link>
    </li>
  );
};
NavigationButton.defaultProps = {
  current: '/',
  to: '/',
  children: React.Element,
};
NavigationButton.propTypes = {
  current: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NavigationButton;
