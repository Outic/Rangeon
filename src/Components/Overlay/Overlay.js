import React from 'react'
import PropTypes from 'prop-types'
import './Overlay.css'



function Overlay({path, size}) {
	return (
		<img src={path} alt="Overlay" className={size}/>
	)
}

Overlay.propTypes = {
	path: PropTypes.string,
	size: PropTypes.string
}

export default Overlay