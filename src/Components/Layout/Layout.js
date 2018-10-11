import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar.js'
import Overlay from '../Overlay/Overlay.js'
import './Layout.css'

class Layout extends Component {
	static propTypes = {
		content   : PropTypes.element,
		background: PropTypes.string
	}
	render() {
		return (
			<main className="container">
				<aside className="leftColumn">
					<Navbar page="index" />
				</aside>
				<section className="centerColumn">
					{this.props.content}
				</section>
				<aside className="rightColumn">
				</aside>
				<Overlay path={this.props.background} size="full" />
			</main>
		)
	}
}

export default Layout