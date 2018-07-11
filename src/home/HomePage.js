import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import Technologies from '../technologies/Technologies';


class HomePage extends Component {


    render() {
        return (
            <React.Fragment>
                <Title isSize={2}>Riley Mathews</Title>
                <Technologies />
            </React.Fragment>
        )
    }
}

export default HomePage
