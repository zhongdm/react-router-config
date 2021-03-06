import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)


export default App;
