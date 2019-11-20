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
}