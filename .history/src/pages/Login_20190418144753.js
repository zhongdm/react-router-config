import React, {Component} from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';
import store from '../store/index'
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogin(e) {
    e.preventDefault();
    store.dispatch({
      type: 'INCREMENT'
    })
    // this.props.history.push('/')
  }
  render() {
    return (
      <div>
    <div className="login-container">
      <form>
        <input placeholder="用户名"/>
        <input placeholder="密码" type="password"/>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleIncrement}>add</button>
        <div>{this.state}</div>
      </form>
    </div>
  </div>
    )
  }
}

export default connect(
  null,
  {}
)(Login)