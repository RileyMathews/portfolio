import React, { Component } from "react"
import InformationManager from "./managers/InformationManager";

/*
    This new function in React - createContext() - is what will
    allow you to create a central store of data, and have any
    component become a Consumer of the data that it cares about.
*/
export const Context = React.createContext()

export class Provider extends Component {


    /*
    The initial state of the data provider should include
    default values for any top-level component that will
    need the data. In this case, PoliticianList is my only
    top-level component. It is not a child of any other
    component.
    */
    state = {
        projects: [],
        technologies: [],
        currentView: "home",
        loadAnimationPlayed: false
    }

    // import functions
    // information manager
    loadTechnologies = InformationManager.loadTechnologies.bind(this)
    loadProjects = InformationManager.loadProjects.bind(this)




    /*
        Since this is just an ordinary component that extends
        React.Component, you can use `componentDidMount` to
        hit your API and then update state.
    */
    componentDidMount() {
        this.loadTechnologies()
        this.loadProjects()
    }

    // function to handle setting the load animation boolean
    animationHasPlayed = bool => {
        this.setState({ loadAnimationPlayed: bool })
    }


    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setView: this.setView,
                showView: this.showView,
                animationHasPlayed: this.animationHasPlayed

            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}