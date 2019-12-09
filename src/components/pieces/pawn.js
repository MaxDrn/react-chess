import stepper from "../helper/stepper";

export default class Pawn {
    constructor(id) {
        this.id = id;
        this.highlight = null;
        this.initialPositions = [
            [48, 49, 50, 51, 52, 53, 54, 55],
            [8, 9, 10, 11, 12, 13, 14, 15],
        ]
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/8/86/Chess_pll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_pld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/0/07/Chess_pdl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/4/41/Chess_pdd45.svg";
    }

    canMove(squares, current, desired) {
        let canMoveTwice = this.checkDoubleMove(current);
        let availableStepsTop = stepper.checkTopSteps(current, desired, squares, false);
        let availableStepsDown = stepper.checkDownSteps(current, desired, squares, false);
        if (this.id === 1) {
            if (canMoveTwice && !this.isOccupied(squares, desired)) {
                return availableStepsTop >= 2 && desired === current - 16 || desired === current - 8;
            }
            if (this.isOccupied(squares, desired) && squares[desired].id !== this.id) {
                if (current % 8 !== 0 && current % 8 !== 7) {
                    return desired === current - 7 || desired === current - 9;
                }
                if (current % 8 === 0) {
                    return desired === current - 7;
                }
                if (current % 8 === 7) {
                    return desired === current - 9;
                }
            }
            return availableStepsTop >= 1 && desired === current - 8;
        }
        if (canMoveTwice && !this.isOccupied(squares, desired)) {
            return availableStepsDown >= 2 && desired === current + 16 || desired === current + 8;
        }
        if (this.isOccupied(squares, desired) && squares[desired].id !== this.id) {
            if (current % 8 !== 0 && current % 8 !== 7) {
                return desired === current + 7 || desired === current + 9;
            }
            if (current % 8 === 0) {
                return desired === current + 9;
            }
            if (current % 8 === 7) {
                return desired === current + 7;
            }
        }
        return availableStepsDown >= 1 && desired === current + 8;
    }

    checkDoubleMove(current) {
        if (this.id === 1) {
            return this.initialPositions[0].includes(current);
        }
        return this.initialPositions[1].includes(current);
    }

    isOccupied(squares, desired) {
        return squares[desired] !== null;
    }
}