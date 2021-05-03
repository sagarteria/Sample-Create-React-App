import React from 'react';

const PropsFunctionalExample = (props) => {
  console.log('props',props);
  return (
    <div>
      <h2>Props Functional Component Example - {props.name}</h2>
      {props.children}
    </div>
  )
}

export default PropsFunctionalExample;