import React, { Component } from 'react';

class FormClass extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value 
    })
  }

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value 
    })
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value 
    })
  }

  render () {
    return (
      <>
        <hr />
        <h2> #21 Form Component </h2>
        <form>
          <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
          </div>
          <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange} >
            </textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.value} onChange={this.handleTopicChange} >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
        </form>
      </>
    )
  }
}

export default FormClass