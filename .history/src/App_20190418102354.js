import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom';

const App = ({ route }) => (
  <div>
    <h1>Root</h1>
    <div style={{backgroundColor: 'red', color: '#fff'}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)


export default App;
