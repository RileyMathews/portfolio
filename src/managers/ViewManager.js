import React from 'react'
import HomePage from "../home/HomePage";
import Projects from '../projects/Projects';

/* 
    module: view manager
    purpose: to drive the current view of the application
    author: riley
*/

const ViewManager = Object.create(null, {
    // function to set the view of the application
    setView: {
        value: function(evt) {
            let view = null

            // click event triggered function
            if (evt.hasOwnProperty("target")) {
                view = evt.target.id.split("__")[1]
            } else { // else if function called manually by string
                view = evt
            }

            // update state based on view
            this.setState({ currentView: view })
        }
    },
    // function to render the correct component based on view
    showView: {
        value: function () {
            switch (this.state.currentView) {
                case "home":
                default:
                    return <HomePage />
                case "projects":
                    return <Projects />
            }
        }
    }
})

export default ViewManager