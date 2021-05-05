import React, { Component } from "react";

class StateClassExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "State Class Component Example"
    }
  }

    changeMessage() {
      this.setState({
        message: 'Thank you for subscribing'
      })
    }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={ () => this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default StateClassExample;
