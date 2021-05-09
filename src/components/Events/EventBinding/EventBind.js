import React, { Component } from 'react';

class EventBind extends Component{
  
  constructor() {
    super();
    this.state = {

    }
  }
  
  clickHandler() {
    console.log('Button clicked');
  }
  render () {
    return (
    <div>
      <button onClick={this.clickHandler}>Event Bind Class Click</button>
    </div>
  )
  }
}

export default EventBind