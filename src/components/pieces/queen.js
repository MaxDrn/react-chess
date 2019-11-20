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
}