export function makeDeck() {
    const deck = [];
    const suit = [
        "Spades",
        "Hearts",
        "Diamonds",
        "Clubs"
    ];
    const faces = [
        "Jack",
        "Queen",
        "King"
    ];

    for (let s = 0; s < 4; s++) {
        const ace = {
            face: "Ace",
            value: 11,
            suit: suit[s]
        };
        deck.push(ace);

        for (let v = 0; v < 9; v++) {
            const cardValue = v + 2;
            const card = {
                face: cardValue,
                value: cardValue,
                suit: suit[s]
            };
            deck.push(card);
        }

        for (let f = 0; f < 3; f++) {
            const royalty = {
                face: faces[f],
                value: 10,
                suit: suit[s]
            };
            deck.push(royalty);
        }
    }
    return deck;
}