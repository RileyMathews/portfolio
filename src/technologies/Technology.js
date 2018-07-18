import React, { Component } from 'react'
import './Technology.css'
import { Column } from '../../node_modules/bloomer/lib/grid/Column';
import { Card } from '../../node_modules/bloomer/lib/components/Card/Card';
import $ from 'jquery';


class Technology extends Component {

    state = {
        descriptionIsVisible: false,
        dropDownActive: false,
        userIsScrolling: false,
    }

    showDropDown = (evt) => {
        console.log("mouse entered")
        $(`#dropdown_tech_${this.props.technology.id}`).slideDown()
        this.setState({ dropDownActive: true})
    }

    hideDropDown = (evt) => {
        console.log("mouse left")
        $(`#dropdown_tech_${this.props.technology.id}`).slideUp()
        this.setState({ dropDownActive: false})
    }

    toggleDropDown = (evt) => {
        console.log("mouse entered")
        if (!this.state.userIsScrolling) {
            if (this.state.dropDownActive) {
                $(`#dropdown_tech_${this.props.technology.id}`).slideUp()
                this.setState({ dropDownActive: !this.state.dropDownActive })
            } else {
                $(`#dropdown_tech_${this.props.technology.id}`).slideDown()
                this.setState({ dropDownActive: !this.state.dropDownActive })
            }
        } else {
            this.setState({ userIsScrolling: false })
        }
    }

    setScrolling = () => {
        this.setState({ userIsScrolling: true })
    }


    render() {
        return (
            <Column isSize={3} className="dropdown">
                <Card className="dropdown-hover" onMouseEnter={this.showDropDown} onMouseLeave={this.hideDropDown} onTouchEnd={this.toggleDropDown} onTouchMove={this.setScrolling}>
                    <img className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />
                    <Card className="dropdown-content" id={`dropdown_tech_${this.props.technology.id}`}>
                        <p className="tech_description">{this.props.technology.description}</p>
                    </Card>
                </Card>
            </Column>
        )
    }
}

export default Technology
