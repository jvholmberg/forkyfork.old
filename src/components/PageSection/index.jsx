import React from 'react';
import PropTypes from 'prop-types';

import './PageSection.scss';

const GetClassName = unique => `PageSection_Container ${unique}`;

const PageSection = (props) => {
  const { children, unique } = props;
  return (
    <nav className={GetClassName(unique)}>
      { children }
    </nav>
  );
};
PageSection.defaultProps = {
  children: React.Element,
  unique: '',
};
PageSection.propTypes = {
  children: PropTypes.node,
  unique: PropTypes.string,
};

export default PageSection;
