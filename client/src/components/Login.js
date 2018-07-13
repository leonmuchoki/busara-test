import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import * as api from '../utils/api'

class Login extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.loginUser(values)
  }

  loginUser = (user_params) => {
    api.authenticateUser(user_params)
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
      this.props.history.push("/contacts");
    }
  }

  render() {
    return (
      <Container text>
      <div className="container">
        <Header as='h2'>Sign in</Header>
        <form className="wrapper" onSubmit={this.handleSubmit}>
          <Input className="sign-in-input" type="email" name="email" placeholder="add your email.." />
          <Input className="sign-in-input" type="password" name="password" placeholder="add your password.." />
          <Button primary>Login</Button>
        </form>
      </div>
      </Container>
    )
  }
}

export default Login