import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './Register'
import Login from './Login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
