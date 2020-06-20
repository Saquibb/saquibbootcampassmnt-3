import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({ name = 'User' }) {
  return (
    <div>
      Hello <strong>{name}</strong>!
      <br />
      <Hello />
    </div>
  );
}

export default App;
