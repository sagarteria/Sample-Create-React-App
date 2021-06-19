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

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA  componentDidUpdate');
  }

  changeState = () => {    
    this.setState({
      name: "name2"
    })
  }

  render () {
    console.log('LifecycleA return');
    return (
      <>
      <hr />
      <h2>#22-24 LifeCycle Methods</h2>
      <h3>LifeCycle A</h3>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB />
      </>
    )
  }
}

export default LifecycleA