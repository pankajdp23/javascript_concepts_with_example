import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import _ from 'lodash';

import './test'
import './index.scss';

console.log('from index.js file', _.isString("Hello"));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);