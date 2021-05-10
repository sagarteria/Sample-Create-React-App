import React, { Component } from 'react';
import InnerComponent from './InnerComponent';

class OuterComponent extends Component{
  constructor() {
    super();
    this.state = {
      outerName: 'Outer'
    }
    this.greetOuter = this.greetOuter.bind(this);
  }

  greetOuter(innerName) {
    alert(`Hello ${this.state.outerName} from ${innerName}`)
  }

  render () {
    return (
      <div>
        <InnerComponent greetHandler={this.greetOuter}/>
      </div>
    )
  }
}

export default OuterComponent