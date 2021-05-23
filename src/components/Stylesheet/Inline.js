import React from 'react';
import './myStyles.css'

function Inline() {
  const heading = {
    fontSize: '24px',
    color: 'blue'
  }
  return (
      <div>
        <h3 style={heading}>Inline Styling</h3>
        <hr />
      </div>
  )
}

export default Inline;