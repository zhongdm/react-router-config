import React, {Component} from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  handleLogin(e) {
    e.preventDefault();
    console.log(this.props.dispatch())
    this.props.store.dispatch({
      type: 'INCREMENT'
    })
    // this.props.history.push('/')
  }
  handleIncrement (e) {
    e.preventDefault()
    const {dispatch, counter} = this.props
    console.log(counter)
    dispatch({
      type: 'INCREMENT'
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
        {/* <div>{this.props.counter}</div> */}
      </form>
    </div>
  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter + 1
  }
}

export default connect(mapStateToProps)(Login)