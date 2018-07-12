import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import { Provider, Context } from './Provider';
import { Container } from '../node_modules/bloomer/lib/layout/Container';
import ApplicationViews from './router/ApplicationViews';

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
                        <React.Fragment>
                            <Nav setView={context.setView} />
                            {/* 
                                Application views will return a component
                                based on the current url
                            */}
                                <ApplicationViews />
                        </React.Fragment>
                    )}
                </Context.Consumer>
            </Provider>
        );
    }
}

export default App;
