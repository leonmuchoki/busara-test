import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import PhoneInput from 'react-phone-number-input'
import * as api from '../utils/api'

class CreateContact extends Component {

  state = {
    value: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.createNewContact(values)
  }

  createNewContact = (contact_params) => {
    api.createContact(contact_params)
              .then(data => (console.log(JSON.stringify(data))))
  }

  render() {
    const user_id = localStorage.user_id
    return (
      <Container text>
        <div className="container">
          <Header as='h3'>Create Contact</Header>
          <form className="wrapper" onSubmit={this.handleSubmit}>
            <Input className="create-contact-input" type="name" name="phone" placeholder="add your phone number.." />
            <Input className="create-contact-input" type="number" name="age" placeholder="enter your age.." />
            <Input className="create-contact-input" type="hidden" name="user_id" value={user_id} />
            <Button className="sign-up-button" primary>Create Contact</Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default CreateContact