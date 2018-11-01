import React from 'react'
import PropTypes from 'prop-types'
import './RollToast.css'

class RollToast extends React.Component {

	writeHeader(array) {
		if (!array[3]) {
			return `${array[0]}d${array[1]}`
		} else {
			return `${array[0]}d${array[1]}${array[2]}${array[3]}:`
		}
	}

	render() {
		return (
			<div>
				<h3 className='toastHeader'>{this.writeHeader(this.props.dice)}</h3>
				<p className='toastBody'>{this.props.dice[4].join(', ')}</p>
				<button className='toastButton'><span aria-label='Log' role='img'>📄</span></button>
			</div>
		)	
	}
}

RollToast.propTypes = {
	dice: PropTypes.array
}


export default RollToast