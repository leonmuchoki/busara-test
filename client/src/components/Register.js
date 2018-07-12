import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
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
      <Container>
        <div className="container">
          <Header as='h3'>Sign Up</Header>
          <form className="wrapper" onSubmit={this.handleSubmit}>
            <Input className="sign-up-input" type="name" name="name" placeholder="add your name.." />
            <Input className="sign-up-input" type="email" name="email" placeholder="add your email.." />
            <Input className="sign-up-input" type="password" name="password" placeholder="add your password.." />
            <Input className="sign-up-input" type="password" name="password_confirmation" placeholder="confirm your password.." />
            <Button className="sign-up-button" primary>Create an account</Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default Register