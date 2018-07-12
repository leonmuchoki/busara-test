import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import * as api from '../utils/api'

class Login extends Component {
  

  render() {
    return (
      <div className="sign-in-container">
        <h3>Sign in</h3>
        <form className="sign-in-wrapper" onSubmit={this.handleSubmit}>
          <input className="sign-in-input" type="email" name="email" placeholder="add your email.." />
          <input className="sign-in-input" type="password" name="password" placeholder="add your password.." />
          <button className="sign-in-button">Login</button>
        </form>
      </div>
    )
  }
}

export default Login