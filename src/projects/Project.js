import React, { Component } from 'react'
import { Card, CardHeader, CardHeaderTitle, Icon, CardContent, Media, MediaLeft, Content, Column } from 'bloomer'

class Project extends Component {


    render() {
        return (
            <Column isSize={4}>
                <Card>
                    <CardHeader>
                        <CardHeaderTitle>
                            {this.props.name}
                        </CardHeaderTitle>
                    </CardHeader>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <a className="link_icon" href={this.props.github_url} target="_blank"><Icon className="fab fa-github fa-lg" /></a>
                                <a className="link_icon" href={this.props.live_url} target="_blank"><Icon className="fas fa-globe fa-lg" /></a>
                            </MediaLeft>
                        </Media>
                        <Content>
                            {this.props.description}
                        </Content>
                    </CardContent>
                </Card>
            </Column>
        )
    }
}

export default Project
