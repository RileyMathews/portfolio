import React, { Component } from 'react'
import { Context } from '../Provider';
import Technology from './Technology';
import { Columns } from '../../node_modules/bloomer/lib/grid/Columns';
import './Technologies.css'
import { Container } from '../../node_modules/bloomer/lib/layout/Container';


class Technologies extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <Container>
                        <Columns className="tech_column" isMultiline={true}>
                            {context.state.technologies.map(technology => (
                                <Technology technology={technology} key={technology.id} />
                            ))}
                        </Columns>
                    </Container>
                )}
            </Context.Consumer>
        )
    }
}

export default Technologies
