import React, { Component } from 'react'


class Technology extends Component {


    render() {
        return (
            <div>
                <p>{this.props.technology.name}</p>
            </div>
        )
    }
}

export default Technology
