import React from 'react';
import Person from './Person';

function NameList () {
  const names = ['name1','name2','name3'];
  const nameList =names.map((name, index) => <h3 key={index} >{name}</h3>);
  const persons = [
    {
      id: 1,
      name: 'name1',
      age: 21,
      skill: 'React'
    },
    {
      id: 2,
      name: 'name2',
      age: 22,
      skill: 'Angular'
    },

    {
      id: 3,
      name: 'name3',
      age: 23,
      skill: 'Vue'
    }
  ];
  const personList =persons.map(person => <Person key={person.id} person={person}/>);

  return (
    <div>
      <hr />
      <h2>#17 - Working with Lists</h2>
      {nameList}
      {personList}
    </div>
  )
}

export default NameList;