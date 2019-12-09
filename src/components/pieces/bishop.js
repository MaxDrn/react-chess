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

    canMove() {
        return true;
    }
}