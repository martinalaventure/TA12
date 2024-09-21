import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>App Component</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
