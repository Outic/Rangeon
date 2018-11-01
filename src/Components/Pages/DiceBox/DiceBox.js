import React from 'react'
import Overlay from '../../Overlay/Overlay'
import Background from './background.svg'
import DiceRoller from '../../DiceRoller/DiceRoller'
import { ToastContainer } from 'react-toastify'

class DiceBox extends React.Component {
	render() {	
		return (
			<main>
				<div>
					<h1>I like to roll some dice</h1>
					<p>Two at the very most: Three I'm under the table, four I'm under the host</p>
					<DiceRoller />
				</div>
				<Overlay path={Background} size="half" />
				<ToastContainer />
			</main>
		)
	}
}

export default DiceBox