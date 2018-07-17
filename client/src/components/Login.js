import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize';
import { Container, Header, Input, Button, Popup, Modal, Icon, Loader } from 'semantic-ui-react'
import * as api from '../utils/api'
import ShowModal from './ShowModal'

class Login extends Component {
  state = {
    modalOpen: false,
    modalMessage: '',
    loading: false
  }

  componentDidMount(){
    let token = localStorage.token
    //console.log('Nav..token..' + token)
    if (token) {
      this.props.history.push("/contacts");
    }
  }

  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = (e) => {
    this.setState({loading: true})
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    this.loginUser(values)
  }

  loginUser = (user_params) => {
    api.authenticateUser(user_params)
              .then(data => this.checkStatus(data))
  }

  checkStatus = (data) => {
    //console.log('checkStatus' + JSON.stringify(data))
    this.setState({loading: false})
    let rtn_status = ""
    if (data !== undefined) {rtn_status = data["status"]} 
    if (rtn_status === 200) {
      // redirect to contacts
      this.props.history.push("/contacts");
    }
    else if (rtn_status === 400) {
      // show pop error
      this.setState({ modalOpen: true, modalMessage: data["message"] })
    }
  }

  render() {
    return (
      <Container text>
      <div className="container">
        <Header as='h2'>Sign in</Header>
        {this.state.modalOpen === false 
          ? <div>
              { this.state.loading === true 
                ? <Loader active  size="large">confirming credentials...please wait</Loader>
                :
                <form className="wrapper" onSubmit={this.handleSubmit}>
                  <Input icon="envelope" className="sign-in-input" type="email" name="email" placeholder="add your email.." />
                  <Input icon="key" className="sign-in-input" type="password" name="password" placeholder="add your password.." />
                  <Button primary>Login</Button>
                  <div className="form-footer">
                    <span>Don't have an account? </span>
                    <Link to="/register">Register</Link>
                  </div>
                </form>
              }
        </div>
          :   <ShowModal modalMessage={this.state.modalMessage} open={this.state.modalOpen} handleClose={this.handleClose} />
        }
      </div>
      </Container>
    )
  }
}

export default Login