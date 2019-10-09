/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: '',
};

export default App;
