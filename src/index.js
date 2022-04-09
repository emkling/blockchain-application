import React from 'react';
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'

import {TransactionsProvider } from './contract/TransactionContext'

ReactDOM.render(

<TransactionsProvider><App /> </TransactionsProvider>, document.getElementById('root'));