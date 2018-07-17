import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import * as api from '../utils/api'
import Nav from './Nav'

class Contacts extends Component {

  componentDidMount(){
    this.fetchContacts()
  }

  fetchContacts = () => {}

  render() {
    return (
      <div>
        <Nav />
        <Container text>
        <div className="container">
          <Header as='h2'>contacts</Header>
        </div>
        </Container>
      </div>
    )
  }
}

export default Contacts