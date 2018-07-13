import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button } from 'semantic-ui-react'
import * as api from '../utils/api'

class Contacts extends Component {

  render() {
    return (
      <Container text>
      <div className="container">
        <Header as='h2'>contacts</Header>
      </div>
      </Container>
    )
  }
}

export default Contacts