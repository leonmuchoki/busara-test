import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import * as api from '../utils/api'
import Nav from './Nav'

class CreateContact extends Component {

  state = {
    value: '',
    phone: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    console.log("create contact..." + JSON.stringify(values))
    this.createNewContact(values)
  }

  createNewContact = (contact_params) => {
    api.createContact(contact_params)
              .then(data => (this.processResponse(data)))
  }

  processResponse = (data) => {
    if (data !== undefined) {
      if (data["status"] === 200) {
        //contact created successfully
      }
    }
  }

  render() {
    let user_id = localStorage.user_id
    return (
      <div>
        <Nav />
        <Container text>
          <div className="container">
            <Header as='h3'>Create Contact</Header>
            <form className="wrapper-contact" onSubmit={this.handleSubmit}>
              
              <PhoneInput
                  placeholder="Enter phone number"
                  name="phone"
                  value={ this.state.phone }
                  onChange={ phone => this.setState({ phone }) }
                  className="create-contact-input create-contact-input-phone"
                  />
              <Input className="create-contact-input" type="number" name="age" placeholder="enter your age.." />
              <Input className="create-contact-input" type="hidden" name="user_id" value={user_id} />
              <Button className="sign-up-button" primary>Create Contact</Button>
            </form>
          </div>
        </Container>
      </div>
    )
  }
}

export default CreateContact