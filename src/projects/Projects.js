import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import { Context } from '../Provider';
import Project from './Project';
import { Columns } from '../../node_modules/bloomer/lib/grid/Columns';
import { Container } from '../../node_modules/bloomer/lib/layout/Container';


class Projects extends Component {


    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className="centered_text">
                        <Title>Projects</Title>
                    </div>
                    <Context.Consumer>
                        {context => (
                            <Columns isMultiline={true}>
                                {context.state.projects.map(project => (
                                    <Project
                                        name={project.name}
                                        description={project.description}
                                        github_url={project.github_url}
                                        live_url={project.live_url}
                                        key={project.id}
                                    />
                                ))}
                            </Columns>
                        )
                        }
                    </Context.Consumer>
                </Container>
            </React.Fragment>
        )
    }
}

export default Projects
