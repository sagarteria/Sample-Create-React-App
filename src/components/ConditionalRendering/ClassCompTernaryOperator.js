import React, { Component } from "react";

class ClassCompTernaryOperator extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    
    return (
      this.state.isLoggedIn ?
        <div>
          <h3>3. Using Conditional/Ternary Operator</h3>
          <h3>You are logged-in </h3>
        </div> :
        <div>
          <h3>3. Using Conditional/Ternary Operator</h3>
          <h3>You are logged-in </h3>
      </div>
    )
  }
}

export default ClassCompTernaryOperator;
