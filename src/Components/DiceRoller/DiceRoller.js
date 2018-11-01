//TODO: Create dice log and update toast to have a log button built in

import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RollToast from './RollToast/RollToast.js'

class DiceRoller extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		processRoll(this.state.value)
		event.preventDefault()
	}

	render() {
		return(
			<section>
				<form onSubmit={this.handleSubmit}>
					<label>
						Dice &nbsp;
						<input type="text" value={this.state.value} onChange={this.handleChange} autoFocus></input>
						<input type="submit" value="Roll" disabled={!this.state.value}></input>
					</label>
				</form>
				<table className='diceLog'>

				</table>
			</section>
		)
	}
}

//Runs a regular expression to determine all variables
//in a roll expression and assigns them to an array, then
//rolls them.
function processRoll(dice) {
	let comparison = /(\d+)d(\d+)([-+x*/><])?([\d]+)?([!m])?/
	let diceArray  = dice.match(comparison)
	if (!diceArray) {
		rollToast()
	}	else if (!diceArray[4]) {
		rollToast(diceArray[1], diceArray[2], '', '', '')
	} else {
		rollToast(diceArray[1], diceArray[2], diceArray[3], diceArray[4], diceArray[5])
	}
}

//Takes dice variables and rolls them, pushing
//the results to a toast.
function rollToast(dice, faces, op, mod) {
	let result = roll(dice, faces, op, mod)

	if(!result) {
		toast.error('Incorrect format (use XdY+Z)', {
			position : 'bottom-center',
			autoClose: 5000
		})
	} else {
		toast(<RollToast dice={[dice, faces, op, mod, result]}/>, {
			className: 'rollToast',
			position : 'bottom-right',
			autoClose: false
		})
	}
}

//Takes dice expression variables and runs
//random numbers, sorts them in descending
//order, and returns the resulting array
function roll(dice, faces, op, mod) {
	let result = []
	let die = Number

	if(!dice) {
		return null
	} else {
		for (let i = 0; i < dice; i++) {
			die = Math.floor(Math.random() * faces + 1)
			op && mod ? result.push(modify(die, op, mod)) : result.push(die)
		}
	}
	
	result.sort(function(b, a) {return a - b})
	return result
}

function modify(input, op, mod) {
	let output = Number
	
	op === '+' ? output = Math.trunc(Number(input) + Number(mod)) :
		op === '-' ? output = Math.trunc(Number(input) - Number(mod)) :
			op === '*' ? output = Math.trunc(Number(input) * Number(mod)) :
				op === 'x' ? output = Math.trunc(Number(input) * Number(mod)) :
					op === '/' ? output = Math.trunc(Number(input) / Number(mod)) :
						output = input

	return output
}

export default DiceRoller