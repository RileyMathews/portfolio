import React, { Component } from 'react'
import { Title } from '../../node_modules/bloomer/lib/elements/Title';
import ContactForm from './ContactForm';
import { Container } from '../../node_modules/bloomer/lib/layout/Container';


class ContactView extends Component {


    render() {
        return (
            <React.Fragment>
                <Container>
                    <Title>Contact</Title>
                    <ContactForm />
                </Container>
            </React.Fragment>
        )
    }
}

export default ContactView
