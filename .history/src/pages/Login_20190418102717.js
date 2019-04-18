import React from 'react'
import { renderRoutes } from 'react-router-config'

export default ({routes}) =>  (
  <div>
    <h1>Login</h1>
    <Link to="/about">Login</Link>
    {renderRoutes(routes)}
  </div>
)