import React, { Component } from 'react'
import './Technology.css'
import { Column } from '../../node_modules/bloomer/lib/grid/Column';
import { Card } from '../../node_modules/bloomer/lib/components/Card/Card';
import $ from 'jquery';


class Technology extends Component {

    state = {
        descriptionIsVisible: false
    }

    onCardHover = () => {
        $(`#dropdown_tech_${this.props.technology.id}`).slideDown()
    }

    onCardLeave = () => {
        $(`#dropdown_tech_${this.props.technology.id}`).slideUp()
    }

    toggleDropDown = () => {
        $(`#dropdown_tech_${this.props.technology.id}`).slideToggle()
    }


    render() {
        return (
            <Column isSize={3} className="dropdown">
                <Card className="dropdown-hover" onMouseEnter={this.onCardHover} onMouseLeave={this.onCardLeave} onClick={this.onCardLeave}>
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
