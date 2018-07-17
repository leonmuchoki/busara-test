import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register'
import Login from './Login'
import CreateContact from './CreateContact'
import Nav from './Nav'
import Contacts from './Contacts'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/contacts/create" component={CreateContact} />
      </div>
    );
  }
}

export default Home;
