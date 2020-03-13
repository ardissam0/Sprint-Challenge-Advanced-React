import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';

function App() {
  return (
    <div>
      <h1>Player List</h1>
      <Navigation />
      <Players />
    </div>
  );
}

export default App;
