import React, { Component } from 'react'
import { Title } from '../../node_modules/bloomer/lib/elements/Title';
import { Container } from '../../node_modules/bloomer/lib/layout/Container';
import ContactInfo from './ContactInfo';
import './ContactView.css'


class ContactView extends Component {


    render() {
        return (
            <React.Fragment>
                <Container className="contact">
                    <Title>Contact me at</Title>
                    <ContactInfo />
                </Container>
            </React.Fragment>
        )
    }
}

export default ContactView
