import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AboutView from '../about/AboutView';
import HomePage from '../home/HomePage';
import Projects from '../projects/Projects';
import ContactView from '../contact/ContactView';


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={AboutView} />
                <Route path="/contact" component={ContactView} />
            </React.Fragment>
        )
    }
}