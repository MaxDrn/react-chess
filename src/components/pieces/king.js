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
}