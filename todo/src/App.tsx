import React from 'react';
import './App.css';
import Persons from './components/Persons';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Persons name="Zain">
        <h3>Learning Typescript</h3>
      </Persons>
    </div>
  );
}

export default App;
