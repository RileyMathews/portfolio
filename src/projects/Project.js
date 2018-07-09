import React, { Component } from 'react'
import { Card, CardHeader, CardHeaderTitle, Icon, CardContent, Media, MediaLeft, Content } from 'bloomer'


class Project extends Component {


    render() {
        return (
            <Card>
                <CardHeader>
                    <CardHeaderTitle>
                        {this.props.name}
                    </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                    <Media>
                        <MediaLeft>
                            <a className="link_icon" href={this.props.github_url} target="_blank"><Icon isSize="medium" className="fab fa-github fa-2x"/></a>
                            <a className="link_icon" href={this.props.live_url} target="_blank"><Icon issize="medium" className="fas fa-globe fa-2x"/></a>
                        </MediaLeft>
                    </Media>
                    <Content>
                        {this.props.description}
                    </Content>
                </CardContent>
            </Card>
        )
    }
}

export default Project
