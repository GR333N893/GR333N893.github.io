more.style.display = 'none';

function start() {
    button.remove();
    more.style.display = 'inline-block';

    function wipe() {
        document.getElementById("3").innerHTML = "";
        document.getElementById("4").innerHTML = "";
    }

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
                back: "cards/back.png"
            };
            ace.front = "cards/" + ace.face + suit[s] + ".png";
            deck.push(ace);

            for (let v = 0; v < 9; v++) {
                const cardValue = v + 2;
                const card = {
                    face: cardValue,
                    value: cardValue,
                    suit: suit[s],
                    back: "cards/back.png"
                };
                card.front = "cards/" + card.face + suit[s] + ".png";
                deck.push(card);
            }

            for (let f = 0; f < 3; f++) {
                const royalty = {
                    face: faces[f],
                    value: 10,
                    suit: suit[s],
                    back: "cards/back.png"
                };
                royalty.front = "cards/" + royalty.face + suit[s] + ".png";
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

    const element = document.getElementById("more");
    element.addEventListener("click", function() {
        wipe();
        ptotal = 0;
        const card = draw();
        playerHand.push(card);

        playerHand.forEach(card => {
            ptotal += card.value;
            const imgElement = document.createElement("img");
            imgElement.src = card.front;
            imgElement.alt = card.face + " of " + card.suit;
            document.getElementById("3").appendChild(imgElement);
        });
        document.getElementById("4").innerHTML = ptotal;
    });

    const deck = makeDeck();

    dtotal = 0;
    ptotal = 0;
    const playerHand = [];
    const dealerHand = [];

    for (let i = 0; i < 2; i++) {
        const card = draw();
        playerHand.push(card);
        const dcard = draw();
        dealerHand.push(dcard);
    }

    for (let i = 0; i < 2; i++) {
        const imgElement = document.createElement("img");
        if (i == 0) {
            dtotal += dealerHand[i].value;
            imgElement.src = dealerHand[i].front;
            imgElement.alt = dealerHand[i].face + " of " + dealerHand[i].suit;
        }
        else {
            imgElement.src = dealerHand[i].back;
        }
        document.getElementById("2").appendChild(imgElement);
    };

    playerHand.forEach(card => {
        ptotal += card.value;
        const imgElement = document.createElement("img");
        imgElement.src = card.front;
        imgElement.alt = card.face + " of " + card.suit;
        document.getElementById("3").appendChild(imgElement);
    });

    document.getElementById("1").innerHTML = dtotal;
    document.getElementById("4").innerHTML = ptotal;
}