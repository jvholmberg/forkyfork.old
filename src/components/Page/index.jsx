import React from 'react';
import PropTypes from 'prop-types';

import './Page.scss';

const GetClassName = unique => `Page_Container ${unique}`;

const Page = (props) => {
  const { children, unique } = props;
  return (
    <main className={GetClassName(unique)}>
      { children }
    </main>
  );
};
Page.defaultProps = {
  children: React.Element,
  unique: '',
};
Page.propTypes = {
  children: PropTypes.node,
  unique: PropTypes.string,
};

export default Page;
