var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectSomething("party_name", "parties");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectSomething("client_name", "clients");

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

orm.grownUps("parties", "party_type", "grown-up");

orm.leftJoin(["client_name", "party_name"], "clients", "parties", "id", "client_id")
