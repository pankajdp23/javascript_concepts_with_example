import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import * as data from './test';
import list from './constants';
import hello from './test';
console.log({data})
data.display();
console.log('users hello', hello)
console.log('user1', data.user1)
console.log('list', list)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
