import React from 'react';
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
      <div>
        <hr />
        <h2>#20 - Stylesheets</h2>
        <h1 className={`${className} font-xl`}>1. CSS Stylesheets</h1>
      </div>
  )
}

export default Stylesheet;