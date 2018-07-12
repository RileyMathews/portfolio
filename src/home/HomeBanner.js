import React, { Component } from 'react'
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { Title } from 'bloomer/lib/elements/Title';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';


class HomeBanner extends Component {


    render() {
        return (
            <Hero isColor='dark' isSize='medium'>
                <HeroBody>
                    <Container className='has-text-centered'>
                        <Title>Riley Mathews</Title>
                        <Subtitle isSize={3}>Full-Stack Software Developer</Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default HomeBanner
