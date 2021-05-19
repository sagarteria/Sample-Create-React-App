import React, { Component } from "react";

class ClassCompVariable extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    
    let message;
    if(this.state.isLoggedIn){
      message =       
        <div>
          <h3>2. Using Variable</h3>
          <h3>You are logged-in </h3>
        </div>
    } else {  
      message = 
        <div>
          <h3>2. Using Variable</h3>
          <h3>You are not logged-in </h3>
        </div>
    }
    return <div>{message}</div>
  }
}

export default ClassCompVariable;
