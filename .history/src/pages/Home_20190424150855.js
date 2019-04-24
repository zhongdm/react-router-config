import React, {Component} from 'react'
import { renderRoutes } from 'react-router-config'

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <h1>Home</h1>{this.props.ctx}
        {renderRoutes(this.props.routes)}
      </div>
    )
  }
}

export default Home