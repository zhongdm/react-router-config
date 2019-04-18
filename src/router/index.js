import React from 'react'
import { HashRouter, Route, Switch, Redirect, Router } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import History from '../pages/History'
import About from '../pages/About'
import Login from '../pages/Login'

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
