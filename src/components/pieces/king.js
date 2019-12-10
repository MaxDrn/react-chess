import stepper from "../helper/stepper";

export default class King {
    constructor(id) {
        this.id = id;
        this.highlight = null;
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/8/85/Chess_kll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/1/1c/Chess_kld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_kdl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/d/da/Chess_kdd45.svg";
    }

    canMove(squares, current, desired) {
        let movePossible = false;
        let possiblePositions = this.getPossiblePositions(squares, current, desired, true);
        possiblePositions.forEach((elem) => {
            if (elem === desired) {
                movePossible = true;
            }
        });
        return movePossible;
    }

    getPossiblePositions(squares, current, desired, ignore) {
        let move = stepper.getAllSteps(squares, current, desired, ignore);
        let possiblePositions = [];
        for (let i = 1; i <= move.leftSteps; i++) {
            possiblePositions.push(current - 1);
        }
        for (let i = 1; i <= move.rightSteps; i++) {
            possiblePositions.push(current + 1);
        }
        for (let i = 1; i <= move.topSteps; i++) {
            possiblePositions.push(current - 8);
        }
        for (let i = 1; i <= move.downSteps; i++) {
            possiblePositions.push(current + 8);
        }
        for (let i = 1; i <= move.topLeftSteps; i++) {
            possiblePositions.push(current - 9);
        }
        for (let i = 1; i <= move.topRightSteps; i++) {
            possiblePositions.push(current - 7);
        }
        for (let i = 1; i <= move.downLeftSteps; i++) {
            possiblePositions.push(current + 7);
        }
        for (let i = 1; i <= move.downRightSteps; i++) {
            possiblePositions.push(current + 9);
        }
        return possiblePositions;
    }
}