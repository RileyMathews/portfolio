import React, { Component } from 'react'
import {Field, Label, Control, Input, Icon, TextArea, Button} from 'bloomer'


class ContactForm extends Component {


    render() {
        return (
            <React.Fragment>
                <Field>
                    <Label>Name</Label>
                    <Control hasIcons>
                        <Input type="text" placeholder='Name' />
                        <Icon isSize='small' isAlign='left'>
                            <span className="fas fa-file-signature" aria-hidden="true" />
                        </Icon>
                    </Control>
                </Field>

                <Field>
                    <Label>Email</Label>
                    <Control hasIcons>
                        <Input placeholder='something@website.com'/>
                        <Icon isSize='small' isAlign='left'>
                            <span className="fa fa-envelope" aria-hidden="true" />
                        </Icon>
                    </Control>
                </Field>

                <Field>
                    <Label>Message</Label>
                    <Control>
                        <TextArea />
                    </Control>
                </Field>

                <Field isGrouped>
                    <Control>
                        <Button isColor='primary'>Submit</Button>
                    </Control>
                </Field>
            </React.Fragment>
        )
    }
}

export default ContactForm
