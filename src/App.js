import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import { Provider, Context } from './Provider';

class App extends Component {

  /* 
    entry point for application
    this component renders the navbar
    and then a component defined in view manager
    based off the current state in provider
  */

  render() {
    return (
      <Provider>
        <Context.Consumer>
          {context => (
            <div>
              <Nav setView={context.setView}/>
              {/* 
                  the show view function renders
                  a component based on currentView state in provider
                */}
              {context.showView()}
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default App;
