import { makeDeck } from "./deck";

function draw() {
    let num = Math.floor(Math.random() * deck.length);
    const randomCard = deck[num];
    deck.splice(num, 1);
    return randomCard;
}

const playerHand = [];
const dealerHand = [];

const deck = makeDeck();

for (let i = 0; i < 2; i++) {
    const card = draw();
    playerHand.push(card);
    const dcard = draw();
    dealerHand.push(dcard);
}

const phand = [];
const dhand = [];
const sDeck = [];

for (let l = 0; l < playerHand.length; l++) {
    phand.push(playerHand[l].face + " of " + playerHand[l].suit);
}

for (let l = 0; l < dealerHand.length; l++) {
    dhand.push(dealerHand[l].face + " of " + dealerHand[l].suit);
}

for (let d = 0; d < deck.length; d++) {
    sDeck.push(deck[d].face + " of " + deck[d].suit);
}

document.getElementById("dealerHand").innerHTML = dhand;
document.getElementById("playerHand").innerHTML = phand;
document.getElementById("info").innerHTML = "deck length: " + deck.length;
document.getElementById("deck").innerHTML = sDeck;