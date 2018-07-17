import React, { Component } from 'react';
import { Container, Header, List } from 'semantic-ui-react'
import * as api from '../utils/api'
import Nav from './Nav'

class Contacts extends Component {

  state = {
    contacts: []
  }

  componentDidMount(){
    this.fetchContacts()
  }

  fetchContacts = () => {
    api.fetchUserContacts()
      .then(data => (this.processResponse(data)))
  }

  processResponse = (data) => {
    if (data !== undefined) {
      //console.log(JSON.stringify(data))
      let contactData = data["contacts"]
      this.setState({contacts: contactData})
    }
  }

  render() {
    const contacts = this.state.contacts
    console.log(JSON.stringify('in render..' + JSON.stringify(contacts)))
    return (
      <div>
        <Nav />
        <Container text>
        <div className="container">
          <Header as='h2'>Your Contacts</Header>
          <List divided verticalAlign='middle'>
            {contacts !== undefined && 
              contacts.map((contact, index)=>(
                <List.Item key={index}>
                  <List.Content>
                    <List.Header as='a'>{contact.name}</List.Header>
                    {contact.phone}
                  </List.Content>
                </List.Item>
              ))
            }
          </List>
        </div>
        </Container>
      </div>
    )
  }
}

export default Contacts