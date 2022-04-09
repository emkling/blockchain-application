import React from 'react';
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'

import {TransactionProvider } from './contract/TransactionProvider'

ReactDOM.render(

<TransactionProvider><App /> </TransactionProvider>, document.getElementById('root'));