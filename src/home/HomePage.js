import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import Technologies from '../technologies/Technologies';
import HomeBanner from './HomeBanner';


class HomePage extends Component {


    render() {
        return (
            <React.Fragment>
                <HomeBanner />
                <Technologies />
            </React.Fragment>
        )
    }
}

export default HomePage
