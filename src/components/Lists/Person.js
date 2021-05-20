import React from 'react';

function Person ({person}) {

  return (
      <h3>{person.name}, {person.age}, {person.skill}</h3>
  )
}

export default Person;