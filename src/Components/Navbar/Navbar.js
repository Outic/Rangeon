import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';


function Navbar({page}) {
	return (
		<ul>
			<a href={(page === 'index') ? '#' : '../../../index.html'}><li>Index</li></a>
		</ul>
	);
}

Navbar.propTypes = {
	page: PropTypes.string
};

export default Navbar;