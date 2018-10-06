import React from 'react';
import './Navbar.css';


function Navbar({page}) {
  return (
    <ul>
      <a href={(page === "index") ? "#" : "../../../index.html"}><li>Index</li></a>
    </ul>
  )
}

export default Navbar;