import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import * as api from '../utils/api'

class CreateContact extends Component {
  
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
      <div className="container">
        <h3>Create Contact</h3>
        <form className="wrapper" onSubmit={this.handleSubmit}>
          <input className="create-contact-input" type="name" name="phone" placeholder="add your phone number.." />
          <input className="create-contact-input" type="number" name="age" placeholder="enter your age.." />
          <input className="create-contact-input" type="hidden" name="user_id" value={user_id} />
          <button className="sign-up-button">Create Contact</button>
        </form>
      </div>
    )
  }
}

export default CreateContact