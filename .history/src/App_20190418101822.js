import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => (
  <div>
    <h1>Root</h1>
    <div style={{backgroundColor: 'red', color: '#fff'}}>
      <ul>
        <li><a>Home</a></li>
      </ul>
    </div>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)


export default App;
