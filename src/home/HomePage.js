import React, { Component } from 'react'
import { Title } from 'bloomer/lib/elements/Title';
import Technologies from '../technologies/Technologies';
import HomeBanner from './HomeBanner';
import { Context } from '../Provider';


class HomePage extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <HomeBanner 
                            loadAnimationPlayed={context.state.loadAnimationPlayed}
                            animationHasPlayed={context.animationHasPlayed}
                        />
                        <Technologies />
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default HomePage
