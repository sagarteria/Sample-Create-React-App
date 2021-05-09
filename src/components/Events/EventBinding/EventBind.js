import React, { Component } from 'react';

class EventBind extends Component{
  
  constructor() {
    super();
    this.state = {
      message: 'Event Bind Class Example'
    }
    this.clickHandlerConstructorBinding = this.clickHandlerConstructorBinding.bind(this); 
  }
  
  clickHandler() {
    this.setState({
      message: 'Event Bind Class Example Clicked'
    })
    console.log(this)
  }

  clickHandlerArrowFunction() {
    this.setState({
      message: 'Event Bind Class Example Clicked (arrow function)'
    })
    console.log(this)
  }

  clickHandlerConstructorBinding() {
    this.setState({
      message: 'Event Bind Class Example Clicked (binding inside constructor)'
    })
    console.log(this)
  }

  clickHandlerDefiningArrow = () => {
    this.setState({
      message: 'Event Bind Class Example Clicked (defining click handler usin arrow function)'
    })
    console.log(this)
  }

  render () {
    return (
    <div>
      <div>{this.state.message}</div>
      {/* 1st approach of event binding */}
      <button onClick={this.clickHandler.bind(this)}>Event Bind Class Click</button>
      {/* 2nd approach of event binding */}
      <button onClick={() => this.clickHandlerArrowFunction()}>Event Bind Class Click(Arrow Function)</button>
      {/* 3rd approach of event binding */}
      <button onClick={this.clickHandlerConstructorBinding}>Event Bind Class Click(Bindinding inside Constructor)</button>
      {/* 4th approach of event binding */}
      <button onClick={this.clickHandlerDefiningArrow}>Event Bind Class Click(defining click handler usin arrow function)</button>
    </div>
  )
  }
}

export default EventBind