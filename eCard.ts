class Card{
    card :string;
    constructor(c: string){
        this.card = c
    }
    toString(){
        return `This card is a ${this.card}`
    }
}
class Hand{
    cards :Card[];
    constructor(c: String){
        this.cards = []
        if(c.toLowerCase() == "e"){
            this.cards.push(new Card("e"))
        }
        else{
            this.cards.push(new Card("s"))
        }
        for (let i = 0; i < 4; i++){
            this.cards.push(new Card("c"))
        }
    }
}
let player = new Hand("e")
console.log(player.cards[0].toString())