import React, { Component } from 'react'

export class Register extends Component {

  goBackToLogin = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        This is Register
        <button onClick={this.goBackToLogin}>Go To Login</button>
      </div>
    )
  }
}
