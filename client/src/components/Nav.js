import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
class Nav extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    let token = localStorage.token
    console.log('Nav..token..' + token)
    if (token) {
      this.setState({loggedIn: true})
    }
  }

  logOutUser = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

  render () {
    return (
      <div className="nav-wrapper">
        <header className="nav-header">
          <div className="nav-header-container">
            <div className="nav-header-logo">
              <h1>Contacts</h1>
            </div>
            <div className="nav-header-links">
            {this.state.loggedIn === true ?
              <div>
                <span className="nav-header-span">
                  <Link to="/contacts">Contacts</Link>
                </span>
                <span className="nav-header-span">
                  <Link to="/contacts/create">New Contact</Link>
                </span>
                <span className="nav-header-span">
                  <Link to="" onClick={this.logOutUser}>Logout</Link> 
                </span>
              </div>
              :
              <div>
                <span className="nav-header-span">
                <Link to="/login">Login</Link>
                </span>
                <span className="nav-header-span">
                <Link to="/register">Sign Up</Link>
                </span>
              </div>
               }
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Nav