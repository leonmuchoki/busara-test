import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register'
import Login from './Login'
import CreateContact from './CreateContact'
import Nav from './Nav'
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contacts" component={Contacts} />
        <Route path="/contacts/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
