import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Player } from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  return (
    <div>
      <Navigation />
      <Player />
    </div>
  );
}

export default App;
