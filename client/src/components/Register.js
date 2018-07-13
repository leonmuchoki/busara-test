import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button, Popup, Modal, Icon } from 'semantic-ui-react'
import * as api from '../utils/api'

class Register extends Component {
  state = {
    modalOpen: false,
    modalMessage: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.createNewUser(values)
  }

  createNewUser = (user_params) => {
    api.createUser(user_params)
              .then(data => (this.onResponse(data)))
  }

  onResponse = (data) => {
    let rtn_status = data["status"]
    if (rtn_status == "200") {
      // redirect to contacts
    }
    else if (rtn_status == "400") {
      // show pop error
      this.setState({ modalOpen: true, modalMessage: data["message"] })
    }
  }

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Container>
        <div className="container">
          <Header as='h3'>Sign Up</Header>
          {this.state.modalOpen === false 
            ?
            <form className="wrapper" onSubmit={this.handleSubmit}>
              <Input icon="user" className="sign-up-input" type="name" name="name" placeholder="add your name.." />
              <Input icon="envelope" className="sign-up-input" type="email" name="email" placeholder="add your email.." />
              <Input icon="key" className="sign-up-input" type="password" name="password" placeholder="add your password.." />
              <Input icon="key" className="sign-up-input" type="password" name="password_confirmation" placeholder="confirm your password.." />
              <Button className="sign-up-button" primary>Create an account</Button>
            </form>
            :
            <Modal basic size='small' open={this.state.modalOpen}>
              <Header icon='browser' content='Error' />
              <Modal.Content>
                <h3>{this.state.modalMessage}</h3>
              </Modal.Content>
              <Modal.Actions>
                <Button color='red' onClick={this.handleClose}>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
          }
        </div>
      </Container>
    )
  }
}

export default Register