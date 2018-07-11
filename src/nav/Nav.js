import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu} from 'bloomer'

class Nav extends Component {
    state = {
        isActive: false
    }

    onClickNav = (evt) => {
        // change state for mobile drop down active
        this.setState({isActive: this.state.isActive ? false : true})
    }

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <Link to="/"><NavbarItem onClick={this.onClickNav}>Home</NavbarItem></Link>
                    <Link to="/projects"><NavbarItem onClick={this.onClickNav}>Projects</NavbarItem></Link>
                    <Link to="/about"><NavbarItem onClick={this.onClickNav}>About Me</NavbarItem></Link>
                    <Link to="/contact"><NavbarItem onClick={this.onClickNav}>Contact</NavbarItem></Link>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav
