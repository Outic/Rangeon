import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Layout from './Components/Layout/Layout'

ReactDOM.render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>,
	document.getElementById('root')
)

registerServiceWorker()