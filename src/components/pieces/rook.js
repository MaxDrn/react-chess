import stepper from "../helper/stepper.js";

export default class Rook {
    constructor(id) {
        this.id = id;
        this.highlight = null;
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Chess_rll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_rld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/8/8e/Chess_rdl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chess_rdd45.svg";
    }

    canMove(squares, current, desired) {
        let movePossible = false;
        let possiblePositions = this.getPossibleMoves(squares, current, desired);
        possiblePositions.forEach((elem) => {
            if (elem === desired) {
                movePossible = true;
            }
        });
        return movePossible;
    }

    getPossibleMoves(squares, current, desired) {
        let possiblePositions = [];
        let leftSteps = stepper.checkLeftSteps(current, desired, squares, true);
        let rightSteps = stepper.checkRightSteps(current, desired, squares, true);
        let downSteps = stepper.checkDownSteps(current, desired, squares, true);
        let topSteps = stepper.checkTopSteps(current, desired, squares, true);
        for (let i = 1; i <= leftSteps; i++) {
            possiblePositions.push(current - i);
        }
        for (let i = 1; i <= rightSteps; i++) {
            possiblePositions.push(current + i);
        }
        for (let i = 1; i <= topSteps; i++) {
            possiblePositions.push(current - (8 * i));
        }
        for (let i = 1; i <= downSteps; i++) {
            possiblePositions.push(current + (8 * i));
        }
        return possiblePositions;
    }
}