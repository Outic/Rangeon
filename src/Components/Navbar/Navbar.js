import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'


function Navbar({page}) {
	return (
		<ul>
			<a href={(page === 'index') ? '#' : '../../../index.html'}><li>Index</li></a>
			<a href={(page === 'diceBox') ? '#' : '../../../diceBox.html'}><li>DiceBox</li></a>
		</ul>
	)
}

Navbar.propTypes = {
	page: PropTypes.string
}

export default Navbar