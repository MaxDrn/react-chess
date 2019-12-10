import stepper from "../helper/stepper";

export default class Queen {
    constructor(id) {
        this.id = id;
        this.highlight = null;
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chess_qll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/7/7d/Chess_qld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/1/1b/Chess_qdl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chess_qdd45.svg";
    }

    canMove(squares, current, desired) {
        let movePossible = false;
        let possiblePositions = this.getPossiblePositions(squares, current, desired);
        possiblePositions.forEach((elem) => {
            if (elem === desired) {
                movePossible = true;
            }
        });
        return movePossible;
    }

    getPossiblePositions(squares, current, desired) {
        let move = stepper.getAllSteps(squares, current, desired, true);
        let possiblePositions = [];
        for (let i = 1; i <= move.leftSteps; i++) {
            possiblePositions.push(current - i);
        }
        for (let i = 1; i <= move.rightSteps; i++) {
            possiblePositions.push(current + i);
        }
        for (let i = 1; i <= move.topSteps; i++) {
            possiblePositions.push(current - (8 * i));
        }
        for (let i = 1; i <= move.downSteps; i++) {
            possiblePositions.push(current + (8 * i));
        }
        for (let i = 1; i <= move.topLeftSteps; i++) {
            possiblePositions.push(current - (9 * i));
        }
        for (let i = 1; i <= move.topRightSteps; i++) {
            possiblePositions.push(current - (7 * i));
        }
        for (let i = 1; i <= move.downLeftSteps; i++) {
            possiblePositions.push(current + (7 * i));
        }
        for (let i = 1; i <= move.downRightSteps; i++) {
            possiblePositions.push(current + (9 * i));
        }
        return possiblePositions;
    }
}