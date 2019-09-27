/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React with Weback and Babel (updated)';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();
