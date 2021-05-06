import React, { Component } from 'react';

class ClassCompDestructure extends Component{
  render () {
    const {FirstProp, SecondProp} = this.props;
    //const {state1, state2} =  this.state;
    return (
      <div>
        <h2>Destructuring Props (Class Component Example) - 1st Prop: {FirstProp} , 2nd Prop: {SecondProp}</h2>
      </div>
    )
  }
}

export default ClassCompDestructure