import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.scss';

const Navigation = props => (
  <nav className="Navigation_Container">
    <ul className="Navigation_Container_List">
      { props.children }
    </ul>
  </nav>
);
Navigation.defaultProps = {
  children: React.Element,
};
Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
