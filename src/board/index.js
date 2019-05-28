import React, { Component } from 'react'
import Tile from './tile'
import { generate } from 'utilities/board'
import './styles.scss'

const board = generate()

export default class Board extends Component {
    render = () => (
        <div className="board">
            {board.map((row, ri) => (
                <div className="row" key={ri}>
                    {row.map((tile, ti) => (
                        <Tile {...tile} key={ti} />
                    ))}
                </div>
            ))}
        </div>
    )
}
