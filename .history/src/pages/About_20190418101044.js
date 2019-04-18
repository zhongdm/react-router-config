import React from 'react'
import { renderRoutes } from 'react-router-config'

export default ({routes}) =>  (
  <div>
    <h1>About</h1>
    {renderRoutes(routes)}
  </div>
)