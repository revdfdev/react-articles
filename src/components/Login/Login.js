import React, { Component } from 'react'

export class Login extends Component {

  sendToRegister = (e) => {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div>
        This is Login
        <button onClick={this.sendToRegister}>Go to Register</button>
      </div>
    )
  }
}
