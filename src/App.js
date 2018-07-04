import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import { Provider } from './Provider';
import HomePage from './home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Nav />
          <HomePage />
        </Provider>
      </div>
    );
  }
}

export default App;
