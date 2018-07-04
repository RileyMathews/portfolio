import React, { Component } from 'react'
import { Context } from '../Provider';
import Technology from './Technology';


class Technologies extends Component {


    render() {
        return (
                <Context.Consumer>
                    {context => (
                        <div>
                            {context.state.technologies.map(technology => (
                                <Technology technology={technology} key={technology.id}/>
                            ))}
                        </div>
                    )

                    }
                </Context.Consumer>
        )
    }
}

export default Technologies
