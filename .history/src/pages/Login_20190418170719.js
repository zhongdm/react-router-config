import React, {Component} from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    const {dispatch} = this.props
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
    // const {dispatch} = this.props
    dispatch({
      type: 'INCREMENT'
    })
  }
  handleDecrement (e) {
    e.preventDefault()
    
    dispatch({
      type: 'DECREMENT'
    })
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