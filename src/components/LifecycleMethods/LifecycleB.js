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

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
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