import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarEnd, Icon } from 'bloomer'
import './Nav.css'

class Nav extends Component {
    state = {
        isActive: false
    }

    onClickNav = (evt) => {
        // change state for mobile drop down active
        this.setState({ isActive: this.state.isActive ? false : true })
    }

    render() {
        return (
            <Navbar className="is-fixed-top">
                <NavbarBrand>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarItem onClick={this.onClickNav}><Link className="nav_link" to="/">Home</Link></NavbarItem>
                    <NavbarItem onClick={this.onClickNav}><Link className="nav_link" to="/projects">Projects</Link></NavbarItem>
                    <NavbarItem onClick={this.onClickNav}><Link className="nav_link" to="/about">About Me</Link></NavbarItem>
                    <NavbarItem onClick={this.onClickNav}><Link className="nav_link" to="/contact">Contact</Link></NavbarItem>
                    <NavbarEnd>
                        <NavbarItem href="https://github.com/RileyMathews" target="_blank" isHidden='touch'>
                            <Icon className='fab fa-github' />
                        </NavbarItem>
                        <NavbarItem href="http://linkedin.com/in/riley-mathews" target="_blank" isHidden='touch'>
                            <Icon className='fab fa-linkedin' />
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav
