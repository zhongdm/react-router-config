import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';

// export default ({routes}) =>  (
//   <div>
//     <div className="login-container">
//       <form>
//         <input placeholder="用户名"/>
//         <input placeholder="密码" type="password"/>
//         <button onClick={this.handleLogin}>Login</button>
//         <Link to="/home">Login</Link>
//       </form>
//     </div>
//     {/* <Link to="/home">Login</Link> */}
//   </div>
// )


class Login extends Component {
  render({routes}) {
    return (
      <div>
    <div className="login-container">
      <form>
        <input placeholder="用户名"/>
        <input placeholder="密码" type="password"/>
        {/* <button onClick={this.handleLogin}>Login</button> */}
        <Link to="/home">Login</Link>
      </form>
    </div>
    {/* <Link to="/home">Login</Link> */}
  </div>
    )
  }
}

export default Login