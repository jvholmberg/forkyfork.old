import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Title = ({ children, className, ...props }) =>
  <h1 className={`Title ${className}`} {...props}>{ children }</h1>;
Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Title.defaultProps = {
  children: React.Element,
  className: '',
};

const Subtitle = ({ children, className, ...props }) =>
  <h2 className={`Subtitle ${className}`} {...props}>{ children }</h2>;
Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Subtitle.defaultProps = {
  children: React.Element,
  className: '',
};

const Heading = ({ children, className, ...props }) =>
  <h3 className={`Heading ${className}`} {...props}>{ children }</h3>;
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Heading.defaultProps = {
  children: React.Element,
  className: '',
};

const Paragraph = ({ children, className, ...props }) =>
  <p className={`Paragraph ${className}`} {...props}>{ children }</p>;
Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Paragraph.defaultProps = {
  children: React.Element,
  className: '',
};

const Quote = ({ children, className, ...props }) =>
  <blockquote className={`Quote ${className}`}{...props}>{ children }</blockquote>;
Quote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Quote.defaultProps = {
  children: React.Element,
  className: '',
};

export { Title, Subtitle, Heading, Paragraph, Quote };
