import React from 'react';
import './App.css';
import Persons from './components/Persons';
import UserData from './components/UserData';
import { GlobalProvider } from './context/GlobalState';

const App: React.FC = (): JSX.Element => {
  return (
    <GlobalProvider>
      <div className="App">
        <UserData />
        <Persons />
      </div>
    </GlobalProvider>
  );
}

export default App;
