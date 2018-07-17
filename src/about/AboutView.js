import React, { Component } from 'react'
import { Title } from '../../node_modules/bloomer/lib/elements/Title';
import { Container } from '../../node_modules/bloomer/lib/layout/Container';
import Bio from './Bio';


class AboutView extends Component {


    render() {
        return (
            <Container>
                <div className="centered_text">
                <Title>About Me</Title>
                </div>
                <Bio />
            </Container>
        )
    }
}

export default AboutView
