import React from 'react';

const FunctionalCompDestructure = (props) => {
  const {FirstProp, SecondProp} = props;
  return (
    <div>
      <h2>Destructuring Props (Functional Component Example) - 1st Prop: {FirstProp} , 2nd Prop: {SecondProp}</h2>
    </div>
  )
}

export default FunctionalCompDestructure;