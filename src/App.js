import React from 'react'
import { Navbar, Footer, Loader, Transactions, Welcome } from './components'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOUtlineClose} from 'react-icons/ai'

const App = () => {
  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
            <Navbar />
            <Welcome />
        </div>
        
        
    </div>
  )
}

export default App