import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home/Home.js'
import DiceBox from '../Pages/DiceBox/DiceBox.js'
import CharGen from '../Pages/CharGen/CharGen.js'
import Navbar from '../Navbar/Navbar.js'

import './Layout.css'

class Layout extends Component {
	render() {
		return (
			<main className="container">
				<aside className="leftColumn">
					<Navbar />
				</aside>
				<section className="mainColumn">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/DiceBox" component={DiceBox}/>
						<Route path="/CharGen" component={CharGen}/>
					</Switch>
				</section>
			</main>
		)
	}
}

export default Layout