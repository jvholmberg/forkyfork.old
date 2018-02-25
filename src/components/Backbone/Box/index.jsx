import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GetClassName = (args) => {
  let ret = '';
  if (args.col12) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_12`;
  else if (args.col9) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_9`;
  else if (args.col8) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_8`;
  else if (args.col6) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_6`;
  else if (args.col4) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_4`;
  else if (args.col3) ret = `${args.wrapper ? 'Wrapper' : 'Box'}_3`;

  return ret;
};

const Box = ({
  col12, col9, col8, col6, col4, col3,
  wrapper, children, ...props
}) => {
  // Get className for component from props
  const ClassName = GetClassName({
    wrapper, col12, col9, col8, col6, col4, col3,
  });

  // If wrapper is provided create <div> instead of default <span>
  return wrapper ?
    (<div className={ClassName} {...props}>{ children }</div>)
    : (<span className={ClassName} {...props}>{ children }</span>);
};
Box.defaultProps = {
  children: React.Element,
  wrapper: false,
  col12: false,
  col9: false,
  col8: false,
  col6: false,
  col4: false,
  col3: false,
};
Box.propTypes = {
  children: PropTypes.node,
  wrapper: PropTypes.bool,
  col12: PropTypes.bool,
  col9: PropTypes.bool,
  col8: PropTypes.bool,
  col6: PropTypes.bool,
  col4: PropTypes.bool,
  col3: PropTypes.bool,
};
export default Box;
