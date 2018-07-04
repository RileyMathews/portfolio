import React, { Component } from 'react'
import {Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu} from 'bloomer'

class Nav extends Component {
    state = {
        isActive: false
    }

    onClickNav = (evt) => {
        // change state for mobile drop down active
        this.setState({isActive: this.state.isActive ? false : true})
        if (evt.target.id !== "") {
            this.props.setView(evt)
        }
    }

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem id="nav__home" onClick={this.onClickNav}>Home</NavbarItem>
                    <NavbarItem id="nav__projects" onClick={this.onClickNav}>Projects</NavbarItem>
                    <NavbarItem id="nav__about" onClick={this.onClickNav}>About Me</NavbarItem>
                    <NavbarItem id="nav__contact" onClick={this.onClickNav}>Contact</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav
