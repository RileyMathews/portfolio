import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import Technologies from '../technologies/Technologies';


class HomePage extends Component {


    render() {
        return (
            <div>
                <Title isSize={2}>Riley Mathews</Title>
                <Technologies />
            </div>
        )
    }
}

export default HomePage
