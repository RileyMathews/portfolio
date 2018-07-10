import React, { Component } from 'react'
import './Technology.css'
import { Column } from '../../node_modules/bloomer/lib/grid/Column';


class Technology extends Component {


    render() {
        return (
            <Column isSize={3}>
                <img className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />
            </Column>
        )
    }
}

export default Technology
