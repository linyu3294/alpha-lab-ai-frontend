import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorldMap/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;