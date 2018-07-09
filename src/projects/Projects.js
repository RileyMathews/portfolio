import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import { Context } from '../Provider';
import Project from './Project';


class Projects extends Component {


    render() {
        return (
            <div>
                <Title isSize={2}>Projects</Title>
                <Context.Consumer>
                    {context => (
                        <div>
                            {context.state.projects.map(project => (
                                <Project 
                                    name={project.name}
                                    description={project.description}
                                    github_url={project.github_url}
                                    live_url={project.live_url}
                                />
                            ))}
                        </div>
                    )
                    }
                </Context.Consumer>
            </div>
        )
    }
}

export default Projects
