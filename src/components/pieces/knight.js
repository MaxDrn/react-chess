export default class Knight {
    constructor(id) {
        this.id = id;
        this.highlight = null;
    }

    setImage(player, shade) {
        this.style = (player === 1) ?
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/a/ad/Chess_nll45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/Chess_nld45.svg" :
            (shade === "light") ?
                "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chess_ndl45.svg" :
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Chess_ndd45.svg";
    }

    canMove(squares, current, desired) {
        let pos = this.getCoordinatesFromIndex(current);
        let desiredCoordinates = this.getCoordinatesFromIndex(desired);
        let possiblePositions = [
            {x: pos.x + 2, y: pos.y - 1},
            {x: pos.x + 2, y: pos.y + 1},
            {x: pos.x - 2, y: pos.y - 1},
            {x: pos.x - 2, y: pos.y + 1},
            {x: pos.x + 1, y: pos.y + 2},
            {x: pos.x + 1, y: pos.y - 2},
            {x: pos.x - 1, y: pos.y + 2},
            {x: pos.x - 1, y: pos.y - 2}
        ];
        let movePossible = false;
        possiblePositions.forEach((elem) => {
            if (desiredCoordinates.x === elem.x && desiredCoordinates.y === elem.y && desiredCoordinates.x >= 0 && desiredCoordinates.y >= 0) {
                movePossible = true;
            }
        });
        return movePossible;
    }

    getCoordinatesFromIndex(cor) {
        let x = cor % 8;
        let y = (cor - x) / 8;
        return {
            x: x,
            y: y,
        }
    }
}