import React, { Component } from 'react'
import './Technology.css'
import { Column } from '../../node_modules/bloomer/lib/grid/Column';
import { Card } from '../../node_modules/bloomer/lib/components/Card/Card';
import { CardImage } from '../../node_modules/bloomer/lib/components/Card/CardImage';
import { Image } from '../../node_modules/bloomer/lib/elements/Image';


class Technology extends Component {


    render() {
        return (
            <Column isSize={3}>
                <Card>
                    <CardImage>
                        <Image isRatio='square' className="tech_logo" src={this.props.technology.img_url} alt={`${this.props.technology.name} logo`} />
                    </CardImage>
                </Card>
            </Column>
        )
    }
}

export default Technology
