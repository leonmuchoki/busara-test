import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button, Loader } from 'semantic-ui-react'
import * as api from '../utils/api'
import ShowModal from './ShowModal'

class Register extends Component {
  state = {
    modalOpen: false,
    modalMessage: '',
    loading: false
  }

  handleSubmit = (e) => {
    this.setState({loading: true})
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.createNewUser(values)
  }

  createNewUser = (user_params) => {
    api.createUser(user_params)
              .then(data => (this.onResponse(data)))
  }

  onResponse = (data) => {
    //console.log('onREsponse..===' + JSON.stringify(data))
    this.setState({loading: false})
    let rtn_status = ""
    if (data !== undefined) {rtn_status = data["status"]} 
    if (rtn_status === 200) {
      // redirect to contacts
      this.props.history.push("/contacts");
    }
    else if (rtn_status === 400) {
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
            <div>
              {this.state.loading === true 
              ? <Loader active  size="large">creating account...please wait</Loader>
              :
              <form className="wrapper" onSubmit={this.handleSubmit}>
                <Input icon="user" className="sign-up-input" type="name" name="name" placeholder="add your name.." />
                <Input icon="envelope" className="sign-up-input" type="email" name="email" placeholder="add your email.." />
                <Input icon="key" className="sign-up-input" type="password" name="password" placeholder="add your password.." />
                <Input icon="key" className="sign-up-input" type="password" name="password_confirmation" placeholder="confirm your password.." />
                <Button className="sign-up-button" primary>Create an account</Button>
              </form>
              }
            </div>
            :
              <ShowModal modalMessage={this.state.modalMessage} open={this.state.modalOpen} handleClose={this.handleClose} />
          }
        </div>
      </Container>
    )
  }
}

export default Register