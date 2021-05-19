import React, { Component } from "react";

class ClassCompShortCircuitOperator extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    
    return (
      this.state.isLoggedIn &&
        <div>
          <h3>4. Using Short Circuit Operator</h3>
          <h3>You are logged-in </h3>
        </div> 
    )
  }
}

export default ClassCompShortCircuitOperator;
