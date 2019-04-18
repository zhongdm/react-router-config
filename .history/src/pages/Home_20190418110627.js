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
        <h1>Home</h1>
        {renderRoutes(this.props.routes)}
      </div>
    )
  }
}

export default Home