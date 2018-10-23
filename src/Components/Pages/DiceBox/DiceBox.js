import React from 'react'
import Overlay from '../../Overlay/Overlay'
import Background from './background.svg'
// import DiceRoller from '../../DiceRoller/DiceRoller'

class DiceBox extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {	
		return (
			<main>
				<div>
					<h1>I like to roll some dice</h1>
					<p>Two at the very most: Three I'm under the table, four I'm under the host</p>
				</div>
				<Overlay path={Background} size="half" />
			</main>
		)
	}
}

export default DiceBox