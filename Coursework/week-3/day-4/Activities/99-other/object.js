var object = {
    address: {
        street: {
            number: 123,
            name: "Elm Street",
            subdivision: {
                name: "Nightmares Only",
                board: {
                    members: [
                        "Freddy", "Jason", "Michael", "Jamie"
                    ]
                }
            }
        }
    }
}

x = object.address.street.subdivision.board.members[3];

console.log(x);

var object = {
    address: {
        street: {
            number: 123,
            name: "Elm Street",
            subdivision: {
                name: "Nightmares Only",
                board: {
                    members: [
                        "Freddy", "Jason", "Michael", "Jamie"
                    ]
                }
            }
        }
    },
    homes: [
        {
            type: "Mansion",
            contractors: [
                {
                    name: "Joan Plumbing Co."
                },
                {
                    name: "Suzanne Electic Boutique"
                },
            ]
        }
    ]
}
y = object.homes[0].contractors[1].name;
console.log(y);

