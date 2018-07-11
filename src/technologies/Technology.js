import React, { Component } from 'react'
import './Technology.css'
import { Column } from '../../node_modules/bloomer/lib/grid/Column';
import { Card } from '../../node_modules/bloomer/lib/components/Card/Card';


class Technology extends Component {

    state = {
        descriptionIsVisible: false
    }

    onCardHover = () => {
        this.setState({ descriptionIsVisible: true })
    }

    onCardLeave = () => {
        this.setState({ descriptionIsVisible: false })
    }

    // cardView = () => {
    //     if (this.state.descriptionIsVisible) {
    //         return <p>{this.props.technology.description}</p>
    //     } else {
    //         return (<img className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />)
    //     }
    // }


    render() {
        return (
            <Column isSize={2} className={this.state.descriptionIsVisible ? "column_focused" : null}>
                <Card className={this.state.descriptionIsVisible ? "tech_card card_focused" : "tech_card"} onMouseEnter={this.onCardHover} onMouseLeave={this.onCardLeave}>
                    <img className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />
                    <Card className={this.state.descriptionIsVisible ? "tech_modal_shown" : "tech_modal_hidden"}>
                        <p>{this.props.technology.description}</p>
                    </Card>
                </Card>
            </Column>
        )
    }
}

export default Technology
