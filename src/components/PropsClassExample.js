import React, { Component } from "react";

class PropsClassExample extends Component {
  render() {
    return (
      <div>
        <h2>Props Functional Component Example - {this.props.name}</h2>
      </div>
    );
  }
}

export default PropsClassExample;
