import React from 'react';

function InnerComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Inner')}>Greet Inner</button>
    </div>
  )
}

export default InnerComponent;