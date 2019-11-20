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
}