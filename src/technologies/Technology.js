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
    
    cardView = () => {
        if (this.state.descriptionIsVisible) {
            return <p>{this.props.technology.description}</p>
        } else {
            return (<img className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />)
        }
    }


    render() {
        return (
            <Column isSize={2}>
                <Card className={this.state.descriptionIsVisible ? "focused" : null}  onMouseEnter={this.onCardHover} onMouseLeave={this.onCardLeave}>
                    {this.cardView()}
                </Card>
            </Column>
        )
    }
}

export default Technology
