import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import { Provider, Context } from './Provider';
import { Container } from '../node_modules/bloomer/lib/layout/Container';

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
              <Nav setView={context.setView} />
              {/* 
                  the show view function renders
                  a component based on currentView state in provider
                */}
              <Container>
                {context.showView()}
              </Container>
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default App;
