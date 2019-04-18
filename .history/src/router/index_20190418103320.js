import React from 'react'
import { HashRouter, Route, Switch, Redirect, Router } from 'react-router-dom'
// import Login from '../views/Login.js'
// import Charts from '../views/charts/Map'
import App from '../App'
// // import Home from '../views/Home'
// import MainLayout from '../views/MainLayout'
// import Graph from '../views/charts/Graph'

import Home from '../pages/Home'
import History from '../pages/History'
import About from '../pages/About'
import Login from '../pages/Login'
// const routeConfig = [
//   {
//     path: '/login',
//     component: Login
//   },
//   {
//     path: '/',
//     component: MainLayout,
//     requiresAuth: true,

//   },
//   {
//     path: '/charts',
//     component: Charts,
//     requiresAuth: true
//   },
//   {
//     path: '/graph',
//     component: Graph,
//     requiresAuth: true
//   }
// ]
const routes = [
  {
    component: Login,
    path: '/login'
  },
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/history',
        restricted: false,
        component: History
      }
    ]
  }
  
];

export default routes
// const routeConfig = [
//   { path: '/',
//     component: App,
//     indexRoute: { component: Home },
//     childRoutes: [
//       { path: 'charts', component: Map },
//       { path: 'graph',
//         component: Graph,
//         childRoutes: [
//         ]
//       }
//     ]
//   }
// ]


// sessionStorage.auth = false
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.auth !== "false" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

// const routeConfig = () => (
//   <HashRouter>
//     <Switch>
//       <PrivateRoute exact path="/" component={Home}>
//         {/* <Route exact path="/home" component={App}/> */}
//       </PrivateRoute>
//       <Route exact path="/login" component={Login}/>
//       <Route exact path="/home" component={App}/>
//     </Switch>
//   </HashRouter>
// )
// export default <HashRouter routes={routeConfig} />
// React.render(<Router history={hashHistory} routes={routeConfig} />, document.body)
