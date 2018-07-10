import React, { Component } from 'react'
import { Context } from '../Provider';
import Technology from './Technology';
import { Columns } from '../../node_modules/bloomer/lib/grid/Columns';
import './Technologies.css'


class Technologies extends Component {


    render() {
        return (
                <Context.Consumer>
                    {context => (
                        <Columns className="tech_column" isMultiline={true}>
                            {context.state.technologies.map(technology => (
                                <Technology technology={technology} key={technology.id}/>
                            ))}
                        </Columns>
                    )

                    }
                </Context.Consumer>
        )
    }
}

export default Technologies
