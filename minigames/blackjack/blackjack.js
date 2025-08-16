document.getElementById("1").innerHTML = "";
document.getElementById("2").innerHTML = "";
document.getElementById("3").innerHTML = "";
document.getElementById("4").innerHTML = "";
document.getElementById("5").innerHTML = "";
document.getElementById("6").innerHTML = "";

function start() {
    button.remove();
    function makeDeck() {
        const deck = [];
        const suit = [
            "spades",
            "hearts",
            "diamonds",
            "clubs"
        ];
        const faces = [
            "jack",
            "queen",
            "king"
        ];

        for (let s = 0; s < 4; s++) {
            const ace = {
                face: "ace",
                value: 11,
                suit: suit[s],
            };
            ace.png = "cards/" + ace.face + suit[s] + ".png";
            deck.push(ace);

            for (let v = 0; v < 9; v++) {
                const cardValue = v + 2;
                const card = {
                    face: cardValue,
                    value: cardValue,
                    suit: suit[s]
                };
                card.png = "cards/" + card.face + suit[s] + ".png";
                deck.push(card);
            }

            for (let f = 0; f < 3; f++) {
                const royalty = {
                    face: faces[f],
                    value: 10,
                    suit: suit[s]
                };
                royalty.png = "cards/" + royalty.face + suit[s] + ".png";
                deck.push(royalty);
            }
        }
        return deck;
    }

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

    const sDeck = [];

    dealerHand.forEach(card => {
        const imgElement = document.createElement("img");
        imgElement.src = card.png;
        imgElement.alt = card.face + " of " + card.suit;
        document.getElementById("2").appendChild(imgElement);
    });

    playerHand.forEach(card => {
        const imgElement = document.createElement("img");
        imgElement.src = card.png;
        imgElement.alt = card.face + " of " + card.suit;
        document.getElementById("4").appendChild(imgElement);
    });

    document.getElementById("1").innerHTML = "dealer hand";
    document.getElementById("3").innerHTML = "your hand";
    document.getElementById("5").innerHTML = "deck length: " + deck.length;
}