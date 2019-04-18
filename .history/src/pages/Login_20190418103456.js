import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';

export default ({routes}) =>  (
  <div>
    <h1>Login</h1>
    <Link to="/home">Login</Link>
    {/* {renderRoutes(routes)} */}
  </div>
)