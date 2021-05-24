import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component{
  constructor(props) {
    super(props);

    this.state = {
      name: 'name1'
    }

    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount');
  }

  render () {
    console.log('LifecycleA return');
    return (
      <>
      <hr />
      <h2>LifeCycle Methods</h2>
      <h3>LifeCycle A</h3>
      <LifecycleB />
      </>
    )
  }
}

export default LifecycleA