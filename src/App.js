import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import { Provider } from './Provider';

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Nav />
          <h1>Riley Mathews</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
