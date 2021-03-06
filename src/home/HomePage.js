import React, { Component } from 'react'
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
                            subtitlePrinted={context.state.subtitlePrinted}
                            animationHasPlayed={context.animationHasPlayed}
                            subtitleHasPrinted={context.subtitleHasPrinted}
                        />
                        <Technologies />
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default HomePage
