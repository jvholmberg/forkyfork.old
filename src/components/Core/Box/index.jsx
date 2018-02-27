import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GetClassName = ({
  className, wrapper, flex, center, noPad, noFloat, col12, col9, col8, col6, col4, col3,
}) => {
  let ret = '';
  if (className) ret = `${className} `;
  if (flex) ret = `${ret} Flex `;
  if (center) ret = `${ret} Center `;
  if (noPad) ret = `${ret} NoPadding `;
  if (noFloat) ret = `${ret} NoFloat `;
  if (col12) ret += `${wrapper ? 'Wrapper' : 'Box'}_12`;
  else if (col9) ret += `${wrapper ? 'Wrapper' : 'Box'}_9`;
  else if (col8) ret += `${wrapper ? 'Wrapper' : 'Box'}_8`;
  else if (col6) ret += `${wrapper ? 'Wrapper' : 'Box'}_6`;
  else if (col4) ret += `${wrapper ? 'Wrapper' : 'Box'}_4`;
  else if (col3) ret += `${wrapper ? 'Wrapper' : 'Box'}_3`;

  return ret;
};

const Box = ({
  col12, col9, col8, col6, col4, col3,
  wrapper, flex, center, noPad, noFloat, children, className, ...props
}) => {
  // Get className for component from props
  const ClassName = GetClassName({
    className, wrapper, flex, center, noPad, noFloat, col12, col9, col8, col6, col4, col3,
  });

  // If wrapper is provided create <div> instead of default <span>
  return wrapper ?
    (<div className={ClassName} {...props}>{ children }</div>)
    : (<span className={ClassName} {...props}>{ children }</span>);
};
Box.defaultProps = {
  children: React.Element,
  className: '',
  wrapper: false,
  flex: false,
  center: false,
  noPad: false,
  noFloat: false,
  col12: false,
  col9: false,
  col8: false,
  col6: false,
  col4: false,
  col3: false,
};
Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wrapper: PropTypes.bool,
  flex: PropTypes.bool,
  center: PropTypes.bool,
  noPad: PropTypes.bool,
  noFloat: PropTypes.bool,
  col12: PropTypes.bool,
  col9: PropTypes.bool,
  col8: PropTypes.bool,
  col6: PropTypes.bool,
  col4: PropTypes.bool,
  col3: PropTypes.bool,
};
export default Box;
