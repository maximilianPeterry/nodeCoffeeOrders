// Create a node app, which takes a coffee order.
// The coffee orders should be stored in a JSON file and
// your should be able to list all the coffee orders and
// delete them as well.

const yargs = require('yargs');
console.log(process.argv)
console.log(yargs.argv)
const {
    convertOrder,
    addOrder,
    listOrders,
    removeOrder
} = require('./coffeeOrders');
//imports

const command = process.argv[2];

if (command === "add") {
    console.log("hereby taking your order!")
    addOrder(yargs.argv.coffeeOrders)
} else if (command === "load") {
    console.log("loading the orders")
    convertOrder()
} else if (command === "list") {
    console.log("this is the order list")
    listOrders()
} else if (command === "remove") {
    console.log("you dont want this anymore? how sad.")
    removeOrder(yargs.argv.coffeeOrders)
} else {
    console.log("unknown command")
}