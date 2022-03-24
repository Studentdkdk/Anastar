import React, {Component} from "react";
import {Route} from 'react-router';
import {Header} from "./components/header";
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Route path={''}></Route><Header/>
      </header>
    </div>
  );
}

export default App;
