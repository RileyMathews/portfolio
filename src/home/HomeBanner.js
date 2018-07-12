import React, { Component } from 'react'
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { Title } from 'bloomer/lib/elements/Title';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import $ from 'jquery';


class HomeBanner extends Component {


    componentDidMount() {
        console.log(this.props.loadAnimationPlayed)
        if (!this.props.loadAnimationPlayed) {
            $("#main_title").animate({
                fontSize: '2rem',
                opacity: 1,
                left: '+=100px'
            }, 2000, function () { })
            $("#main_subtitle").animate({
                fontSize: '2rem',
                opacity: 1,
                left: '-=100px'
            }, 2000, function () {
                this.props.animationHasPlayed(true)
            }.bind(this))
        }
    }



    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody>
                    <Container className='has-text-centered'>
                        <Title
                            style={
                                this.props.loadAnimationPlayed ?
                                    null
                                    :
                                    {
                                        fontSize: '1rem',
                                        opacity: 0,
                                        left: '-100px',
                                        position: 'relative'
                                    }
                            }
                            id="main_title">
                            Riley Mathews
                        </Title>
                        <Subtitle
                            style={
                                this.props.loadAnimationPlayed ?
                                    null
                                    :
                                    {
                                        fontSize: '1rem',
                                        opacity: 0,
                                        left: '+100px',
                                        position: 'relative'
                                    }
                            }
                            id="main_subtitle"
                            isSize={3}>
                            Full-Stack Software Developer
                        </Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default HomeBanner
