import React from 'react';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: this.props.squares,
        }
    }

    renderSquare(id, shade, style, highlight) {
        return (
            <button
                className={"square_" + shade}
                style={{backgroundImage: "url(" + style + ")", borderColor: highlight}}
                onClick={() => this.props.click(id)}>
            </button>
        );
    }

    render() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let shade;
                if (i % 2 === 0) {
                    shade = (j % 2 !== 0) ? "light" : "dark";
                } else {
                    shade = (j % 2 !== 0) ? "dark" : "light";
                }

                if (this.state.squares[i * 8 + j] !== null) {
                    this.state.squares[i * 8 + j].setImage(this.state.squares[i * 8 + j].id, shade);
                    board.push(this.renderSquare(i * 8 + j, shade, this.state.squares[i * 8 + j].style, this.state.squares[i * 8 + j].highlight));
                } else {
                    board.push(this.renderSquare(i * 8 + j, shade, null, null));
                }
            }
        }
        return board;
    }
}