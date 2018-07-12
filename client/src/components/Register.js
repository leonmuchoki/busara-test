import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import * as api from '../utils/api'

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.createNewUser(values)
  }

  createNewUser = (user_params) => {
    api.createUser(user_params)
              .then(data => (console.log(JSON.stringify(user_params))))
  }

  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <form className="wrapper" onSubmit={this.handleSubmit}>
          <input className="sign-up-input" type="name" name="name" placeholder="add your name.." />
          <input className="sign-up-input" type="email" name="email" placeholder="add your email.." />
          <input className="sign-up-input" type="password" name="password" placeholder="add your password.." />
          <input className="sign-up-input" type="password" name="password_confirmation" placeholder="confirm your password.." />
          <button className="sign-up-button">Create an account</button>
        </form>
      </div>
    )
  }
}

export default Register