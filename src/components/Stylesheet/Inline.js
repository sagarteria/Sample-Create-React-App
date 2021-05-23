import React from 'react';
import './myStyles.css'

function Inline() {
  const heading = {
    fontSize: '24px',
    color: 'blue'
  }
  return (
      <div>
        <h3 style={heading}>2. Inline Styling</h3>
      </div>
  )
}

export default Inline;