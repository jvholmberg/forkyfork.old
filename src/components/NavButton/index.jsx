import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavButton.scss';

const GetClassName = active =>
  `NavButton_Container_Item${active ? '_Active' : ''}`;

const NavButton = (props) => {
  const { children, to, current } = props;
  return (
    <li className="NavButton_Container">
      <Link className={GetClassName(current === to)} to={to}>
        {children}
      </Link>
    </li>
  );
};
NavButton.defaultProps = {
  current: '/',
  to: '/',
  children: React.Element,
};
NavButton.propTypes = {
  current: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NavButton;
