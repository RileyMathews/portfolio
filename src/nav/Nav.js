import React, { Component } from 'react'
import {Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu} from 'bloomer'

class Nav extends Component {
    state = {
        isActive: false
    }

    onClickNav = (evt) => {
        this.setState({isActive: this.state.isActive ? false : true})
    }

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem id="nav__profile" onClick={this.onClickNav}>Home</NavbarItem>
                    <NavbarItem id="nav__search" onClick={this.onClickNav}>Projects</NavbarItem>
                    <NavbarItem id="nav__suggest" onClick={this.onClickNav}>About Me</NavbarItem>
                    <NavbarItem id="nav__logout" onClick={this.onClickNav}>Contact</NavbarItem>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav
