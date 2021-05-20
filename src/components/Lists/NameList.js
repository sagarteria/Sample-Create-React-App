import React from 'react';

function NameList () {
  const names = ['name1','name2','name3'];
  const nameList =names.map(name => <h3>{name}</h3>);
  return (
    <div>
      <hr />
      <h2>#17 - Working with Lists</h2>
      {nameList}
    </div>
  )
}

export default NameList;