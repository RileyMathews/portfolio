import React, { Component } from 'react'
import { Title } from '../../node_modules/bloomer/lib/elements/Title';
import { Icon } from '../../node_modules/bloomer/lib/elements/Icon';
import './ContactInfo.css'


class ContactInfo extends Component {


    render() {
        return (
            <React.Fragment>
                <a className="contact_link" target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/riley-mathews"><Icon isSize="medium" className="fab fa-linkedin fa-2x contact_icon"  /></a>
                <a className="contact_link" target="_blank" rel="noopener noreferrer" href="https://github.com/RileyMathews"><Icon isSize="medium" className="fab fa-github fa-2x contact_icon"  /></a>
                <a className="contact_link" rel="noopener noreferrer" href="mailto:rileymathews80@gmail.com"><Icon isSize="medium" className="fas fa-envelope fa-2x contact_icon"  /></a>
            </React.Fragment>
        )
    }
}

export default ContactInfo
