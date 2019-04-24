import React, {Component} from 'react'
// import { renderRoutes } from 'react-router-config'
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {increment, decrement} from '../store/actions'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://2b61681979b0483aa724a9e49ad547fb@sentry.io/react-sentry',
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