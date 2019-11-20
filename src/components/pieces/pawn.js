export default class Pawn {
    constructor(id) {
        this.id = id;
        this.highlight = null;
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
}