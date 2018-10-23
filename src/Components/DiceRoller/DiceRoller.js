//TODO: Import dice roll functionality from Development

import React from 'react'

class DiceRoller extends React.Component {
	state = {

	}
	
	render() {
		return(
			<section>
				<input type="text" ></input>
				<button onClick={roll()}>Roll</button>
			</section>
		)
	}
}

function roll() {
	console.log ('Wee')
}

export default DiceRoller