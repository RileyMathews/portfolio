import React, { Component } from 'react'
import { Title } from '../../node_modules/bloomer/lib/elements/Title';
import { Container } from '../../node_modules/bloomer/lib/layout/Container';
import ContactInfo from './ContactInfo';


class ContactView extends Component {


    render() {
        return (
            <React.Fragment>
                <Container>
                    <Title>Contact</Title>
                    <ContactInfo />
                </Container>
            </React.Fragment>
        )
    }
}

export default ContactView
