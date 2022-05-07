import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Application, Status} from './Application/Application';
function App() {
  return (
    <div className="App">
      <div className="application-view">
        <Application title="Super Hero" status={Status.Applied}/>
        <Application title="Programmer" status={Status.Accepted}/>
      </div>
      <div className="application-details">
        Edit Application details!
        Notes,
        link to application website,
        phone number,
        link to corporate website,
        date applied,
        location,
        salary
      </div>
    </div>
  );
}

export default App;
