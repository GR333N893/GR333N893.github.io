more.style.display = 'none';
stand.style.display = 'none';
pa.style.display = 'none';
let deck = [];
let discardPile = [];
let playerHand = [];
let dealerHand = [];

function start() {
    if (deck.length == 0 && discardPile.length == 0) {
        let suit = [
            "spades",
            "hearts",
            "diamonds",
            "clubs"
        ];
        let faces = [
            "jack",
            "queen",
            "king"
        ];
        for (let s = 0; s < 4; s++) {
            let ace = {
                face: "ace",
                value: 11,
                suit: suit[s],
                back: "cards/back.png"
            };
            ace.front = "cards/" + ace.face + suit[s] + ".png";
            deck.push(ace);

            for (let v = 0; v < 9; v++) {
                let cardValue = v + 2;
                let card = {
                    face: cardValue,
                    value: cardValue,
                    suit: suit[s],
                    back: "cards/back.png"
                };
                card.front = "cards/" + card.face + suit[s] + ".png";
                deck.push(card);
            }

            for (let f = 0; f < 3; f++) {
                let royalty = {
                    face: faces[f],
                    value: 10,
                    suit: suit[s],
                    back: "cards/back.png"
                };
                royalty.front = "cards/" + royalty.face + suit[s] + ".png";
                deck.push(royalty);
            }
        }
    }

    button.style.display = 'none';
    dwipe();
    pwipe();
    pa.style.display = 'none';
    more.style.display = 'inline-block';
    stand.style.display = 'inline-block';

    function rebuild() {
        if (deck.length < 1) {
            while (discardPile.length > 0) {
                deck.push(discardPile[0]);
                discardPile.splice(discardPile[0], 1);
            };
        }
    }

    function dwipe() {
        dtotal = 0;
        document.getElementById("1").innerHTML = "";
        document.getElementById("2").innerHTML = "";
    }

    function pwipe() {
        ptotal = 0;
        document.getElementById("3").innerHTML = "";
        document.getElementById("4").innerHTML = "";
    }

    function draw() {
        let num = Math.floor(Math.random() * deck.length);
        let randomCard = deck[num];
        deck.splice(num, 1);
        return randomCard;
    }

    function plist() {
        playerHand.forEach(card => {
            ptotal += card.value;
            let imgElement = document.createElement("img");
            imgElement.src = card.front;
            imgElement.alt = card.face + " of " + card.suit;
            document.getElementById("3").appendChild(imgElement);
        });
        document.getElementById("4").innerHTML = ptotal;

        /*if (ptotal >= 21) {
            roundEnd();
        }*/
    }

    function roundEnd() {
        dwipe();
        more.style.display = 'none';
        stand.style.display = 'none';
        pa.style.display = 'inline-block';

        dealerHand.forEach(card => {
            let imgElement = document.createElement("img");
            dtotal += card.value;
            imgElement.src = card.front;
            imgElement.alt = card.face + " of " + card.suit;
            document.getElementById("2").appendChild(imgElement);
        });

        document.getElementById("1").innerHTML = dtotal;
        document.getElementById("2.5").innerHTML = deck.length + " " + discardPile.length;

        let playAgain = document.getElementById("pa");

        playAgain.addEventListener("click", function() {
            while (playerHand.length > 0) {
                discardPile.push(playerHand[0]);
                playerHand.splice(playerHand[0], 1);
            }

            while (dealerHand.length > 0) {
                discardPile.push(dealerHand[0]);
                dealerHand.splice(dealerHand[0], 1);
            }

            start();
        });
    }

    let hitBtn = document.getElementById("more");

    hitBtn.addEventListener("click", function() {
        pwipe();
        rebuild();
        let card = draw();
        playerHand.push(card);
        document.getElementById("2.5").innerHTML = deck.length + " " + discardPile.length;
        plist();
    });

    let standBtn = document.getElementById("stand");

    standBtn.addEventListener("click", function() {
        roundEnd();
    });

    rebuild();

    for (let i = 0; i < 2; i++) {
        let card = draw();
        playerHand.push(card);
        let dcard = draw();
        dealerHand.push(dcard);
    }

    for (let i = 0; i < 2; i++) {
        let imgElement = document.createElement("img");
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

    document.getElementById("1").innerHTML = dtotal;
    plist();
    document.getElementById("2.5").innerHTML = deck.length + " " + discardPile.length;
}