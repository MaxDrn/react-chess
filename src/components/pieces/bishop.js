import stepper from "../helper/stepper";

export default class Bishop {
    constructor(id) {
        this.id = id;
        this.highlight = null;
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chess_bll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/f/fd/Chess_bld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chess_bdl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chess_bdd45.svg";
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
        let possiblePositions = [];
        let stepsTopLeft = stepper.checkTopLeftSteps(current, desired, squares, true);
        let stepsTopRight = stepper.checkTopRightSteps(current, desired, squares, true);
        let stepsDownLeft = stepper.checkDownLeftSteps(current, desired, squares, true);
        let stepsDownRight = stepper.checkDownRightSteps(current, desired, squares, true);
        for (let i = 1; i <= stepsTopLeft; i++) {
            possiblePositions.push(current - (9 * i));
        }
        for (let i = 1; i <= stepsTopRight; i++) {
            possiblePositions.push(current - (7 * i));
        }
        for (let i = 1; i <= stepsDownLeft; i++) {
            possiblePositions.push(current + (9 * i));
        }
        for (let i = 1; i <= stepsDownRight; i++) {
            possiblePositions.push(current + (7 * i));
        }
        return possiblePositions;
    }
}