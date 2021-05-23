import React from 'react';
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
      <div>
        <h1 className={className}>Stylesheets</h1>
        <hr />
      </div>
  )
}

export default Stylesheet;