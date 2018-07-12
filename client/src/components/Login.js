import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import * as api from '../utils/api'

class Login extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.loginUser(values)
  }

  loginUser = (user_params) => {
    ReceiptAPI.authenticateUser(user_params)
              .then(data => this.checkStatus(data))
  }

  checkStatus = (data) => {
    let rtn_status = data["return_status"]
    //console.log('checkStatus' + JSON.stringify(data))
    if (rtn_status === "success") {
      let user_data = data["user"]
      localStorage.setItem('user_id', user_data["id"])
      localStorage.setItem('user_email', user_data["email"])
      localStorage.setItem('token', data["auth_token"])
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Sign in</h3>
        <form className="wrapper" onSubmit={this.handleSubmit}>
          <input className="sign-in-input" type="email" name="email" placeholder="add your email.." />
          <input className="sign-in-input" type="password" name="password" placeholder="add your password.." />
          <button className="sign-in-button">Login</button>
        </form>
      </div>
    )
  }
}

export default Login