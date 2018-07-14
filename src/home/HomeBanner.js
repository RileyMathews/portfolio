import React, { Component } from 'react'
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { Title } from 'bloomer/lib/elements/Title';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import $ from 'jquery';


class HomeBanner extends Component {

    state = {
        subtitle: "",
        subtitleText: "Full-Stack Software Developer",
        subTitlePrinted: false
    }

    componentDidMount() {
        if (!this.props.loadAnimationPlayed) {
            $("#main_title").animate({
                fontSize: '2rem',
                opacity: 1,
                top: '+=100px'
            }, 2000, function() {
                this.props.animationHasPlayed(true)
                this.typeOutSubtitle()
            }.bind(this))
        }
        if (this.props.loadAnimationPlayed === true && this.props.subtitlePrinted === false) {
            this.typeOutSubtitle()
        }
    }

    typeOutSubtitle = () => {
        const text = this.state.subtitleText
        for (var i = 0; i < text.length; i++) {
            ((index) => {
                setTimeout(() => {
                    this.setState({ subtitle: this.state.subtitle + text[index] })
                    if (this.state.subtitle === this.state.subtitleText) {
                        this.props.subtitleHasPrinted(true)
                    }
                }, 60 * i)
            })(i);
        }
    }

    // code to kill timeout function if page is left before print animation plays
    componentWillUnmount() {
        var highestTimeoutId = setTimeout(";");
        for (var i = 0; i < highestTimeoutId; i++) {
            console.log(i)
            clearTimeout(i);
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
                                        top: '-100px',
                                        position: 'relative'
                                    }
                            }
                            id="main_title">
                            Riley Mathews
                        </Title>
                        <Subtitle id="main_subtitle" isSize={3}>
                            {this.props.loadAnimationPlayed === true && this.props.subtitlePrinted === true ?
                                this.state.subtitleText
                                :
                                this.state.subtitle
                            }
                        </Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default HomeBanner
