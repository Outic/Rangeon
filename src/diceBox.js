import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Layout from './Components/Layout/Layout'
import MainIndex from './Components/Pages/MainIndex/MainIndex'
import Backdrop from './Components/Pages/MainIndex/background.svg'

ReactDOM.render(<Layout content={<MainIndex />} background={Backdrop}/>, document.getElementById('root'))
registerServiceWorker()
