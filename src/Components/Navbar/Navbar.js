import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/DiceBox">DiceBox</Link>
			</li>
			<li>
				<Link to="/CharGen">CharGen</Link>
			</li>
		</ul>
	)
}

export default Navbar