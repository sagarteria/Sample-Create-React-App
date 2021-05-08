import React from 'react';

function FunctionalClick () {
  function clickHandler() {
    console.log('Button clicked');
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  )
}

export default FunctionalClick;