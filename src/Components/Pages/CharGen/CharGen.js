import React from 'react'
import Overlay from '../../Overlay/Overlay'
import Background from './background.svg'

function CharGen() {
	return (
		<main>
			<div>
				<h1>Let's make a character</h1>
				<p>A real character, that one</p>
			</div>
			<Overlay path={Background} size="half" />
		</main>
	)
}

export default CharGen