import React, { Component } from "react";

class ClassCompIfElse extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    if(this.state.isLoggedIn){
      return (      
        <div>
          <hr />
          <h2>Conditional Rendering Class Component Example</h2>
          <h3>1. Using If-Else</h3>
          <h3>You are logged-in </h3>
        </div>
      );
    } else {
      return (      
        <div>
          <hr />
          <h2>Conditional Rendering Class Component Example</h2>
          <h3>1. Using If-Else</h3>
          <h3>You are not logged-in </h3>
        </div>
      );
    }
  }
}

export default ClassCompIfElse;
