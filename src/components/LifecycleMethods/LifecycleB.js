import React, { Component } from 'react';

class LifecycleB extends Component{
  constructor(props) {
    super(props);

    this.state = {
      name: 'name1'
    }

    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleB componentDidMount');
  }

  render () {
    console.log('LifecycleB return');
    return (
      <>
      <h3>LifeCycle B</h3>
      </>
    )
  }
}

export default LifecycleB