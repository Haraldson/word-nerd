import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        const { type } = this.props

        return (
            <div className={`tile ${type}`}>
                {type.slice(0, 2).toUpperCase()}
            </div>
        )
    }
}
