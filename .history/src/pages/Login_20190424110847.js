import React, {Component} from 'react'
// import { renderRoutes } from 'react-router-config'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {increment, decrement} from '../store/actions'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://48dd763215c54768938a7d997e72cc56:944de5a2b13a4157907106c470297326@sentry.io/3',
  debug: true
})

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'hello'
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  handleLogin(e) {
    e.preventDefault();

    if (this.state.username !== 'hello1') {
      Sentry.captureMessage('登陆用户名不应该是'+ this.state.username)
      return false
    }
    this.props.history.push('/')
  }
  handleIncrement (e) {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(increment())
  }
  handleDecrement (e) {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(decrement())
  }
  render() {
    return (
      <div>
    <div className="login-container">
      <form>
        <input placeholder="用户名" type="text" value={this.state.username}/>
        <input placeholder="密码" type="password"/>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleIncrement}>add</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <div>{this.props.counter}</div>
      </form>
    </div>
  </div>
    )
  }
}

const mapStateToProps = state =>{
  return ({
    counter: state.addCounter.counter
  })
} 

export default connect(mapStateToProps)(Login)