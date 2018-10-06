import React from 'react';
import './Overlay.css';


function Overlay({path, size}) {
  return (
  <img src={path} alt="Overlay" className={size}/>
  )
}

export default Overlay;