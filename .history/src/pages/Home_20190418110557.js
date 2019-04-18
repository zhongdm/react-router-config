import React from 'react'
import { renderRoutes } from 'react-router-config'

export default ({routes}) =>  (
  <div>
    <h1>Home</h1>
    {renderRoutes(routes)}
  </div>
)


class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
    <div className="login-container">
      <form>
        <input placeholder="用户名"/>
        <input placeholder="密码" type="password"/>
        {/* <button onClick={this.handleLogin}>Login</button> */}
        <Link to="/">Login</Link>
      </form>
    </div>
    {/* <Link to="/home">Login</Link> */}
  </div>
    )
  }
}

export default Home