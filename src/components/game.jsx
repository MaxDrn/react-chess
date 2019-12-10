import React from 'react';
import Board from './board.jsx';
import initChessBoard from "./helper/initBoard";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: initChessBoard(),
            clickedPosition: -1,
            turn: 1,
        }
    }

    handleFirstClick(i) {
        let copy = this.state.squares;
        copy[i].highlight = "rgba(0, 0, 0, 0.7)";
        this.setState({clickedPosition: i, squares: copy});
    }

    isLegalMove(squares, i) {
        let correctMove = squares[this.state.clickedPosition].canMove(squares, this.state.clickedPosition, i);
        if (squares[i] === null) {
            return correctMove;
        }

        let sameTeam = squares[i].id === this.state.squares[this.state.clickedPosition].id;
        if (!sameTeam) {
            return correctMove;
        }

        let copy = this.state.squares;
        copy[this.state.clickedPosition].highlight = null;
        this.setState({squares: copy});
        squares[i].highlight = "rgba(0, 0, 0, 0.7)";
        this.setState({
            clickedPosition: i,
        });
        return false;
    }

    handleSecondClick(i) {
        let copy = this.state.squares;
        let ok = this.isLegalMove(copy, i);
        if (ok) {
            copy[i] = this.state.squares[this.state.clickedPosition];
            copy[i].highlight = null;
            copy[this.state.clickedPosition] = null;
            this.setState({
                clickedPosition: -1,
                squares: copy,
            });
            if (this.state.turn === 1) {
                document.getElementById('root').style.border = "7px solid black";
                this.setState({turn: 2});
                return;
            }
            document.getElementById('root').style.border = "7px solid white";
            this.setState({turn: 1});
        }
    }

    render() {
        return (
            <div>
                <Board squares={this.state.squares} click={(i) => {
                    if (this.state.clickedPosition === -1 && this.state.squares[i] !== null) {
                        if (this.state.squares[i].id === this.state.turn) {
                            this.handleFirstClick(i);
                        }
                        return;
                    }
                    if (this.state.clickedPosition !== -1) {
                        this.handleSecondClick(i)
                    }
                }}/>
            </div>
        )
    }
}