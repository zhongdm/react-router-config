import { renderRoutes } from 'react-router-config'

export default ({routes}) =>  {
  <div>
    <h1>History</h1>
    {renderRoutes(routes)}
  </div>
}