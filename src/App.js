import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({ name = 'User', age }) {
  return (
    <div>
      Hello <strong>{name}</strong>! Age={age - 10}
      <br />
      <Hello />
    </div>
  );
}

export default App;
