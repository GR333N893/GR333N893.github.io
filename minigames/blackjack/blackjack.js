more.style.display = 'none';
stand.style.display = 'none';
pa.style.display = 'none';
const deck = [];
const discardPile = [];

function start() {
    button.style.display = 'none';
    dwipe();
    pwipe();
    pa.style.display = 'none';
    more.style.display = 'inline-block';
    stand.style.display = 'inline-block';

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
        const randomCard = deck[num];
        deck.splice(num, 1);
        discardPile.push(randomCard);
        return randomCard;
    }

    function plist() {
        playerHand.forEach(card => {
            ptotal += card.value;
            const imgElement = document.createElement("img");
            imgElement.src = card.front;
            imgElement.alt = card.face + " of " + card.suit;
            document.getElementById("3").appendChild(imgElement);
        });
        document.getElementById("4").innerHTML = ptotal;

        if (ptotal >= 21) {
            roundEnd();
        }
    }

    function roundEnd() {
        dwipe();
        more.style.display = 'none';
        stand.style.display = 'none';
        pa.style.display = 'inline-block';

        dealerHand.forEach(card => {
            const imgElement = document.createElement("img");
            dtotal += card.value;
            imgElement.src = card.front;
            imgElement.alt = card.face + " of " + card.suit;
            document.getElementById("2").appendChild(imgElement);
        });

        document.getElementById("1").innerHTML = dtotal;
    }

    const hitBtn = document.getElementById("more");

    hitBtn.addEventListener("click", function() {
        pwipe();
        const card = draw();
        playerHand.push(card);

        plist();
    });

    const standBtn = document.getElementById("stand");

    standBtn.addEventListener("click", function() {
        roundEnd();
    });

    if (deck.length < 1 && discardPile.length < 1) {
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
    }
    else if (deck.length < 1) {
        discardPile.forEach(card => {
            deck.push(card);
            discardPile.splice(card, 1);
        });
    }

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

    document.getElementById("1").innerHTML = dtotal;
    plist();
    document.getElementById("2.5").innerHTML = deck.length + " " + discardPile.length;
}