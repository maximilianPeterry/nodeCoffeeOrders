const fs = require('fs');

const convertOrder = () => {
    try {
        const dataBuffer = fs.readFileSync('coffeeOrders.json');
        const ordersJSON = dataBuffer.toString();

        return JSON.parse(ordersJSON)
    } catch (e) {
        return [];
    }
}

const addOrder = (newOrder) => {
    const allOrders = convertOrder();

    allOrders.push({
        NewCoffee: newOrder
    }); //NewCoffee= poss"Reminder"
    saveOrders(allOrders)
}
const saveOrders = (orders) => {
    const ordersJSON = JSON.stringify(orders);
    fs.writeFileSync('coffeeOrders.json', ordersJSON)
}
const listOrders = () => {
    const allOrders = convertOrder();

    allOrders.map((order) => {
        console.log(order.NewCoffee)
    })
}
const removeOrder = (deletedOrder) => {
    const allOrders = convertOrder();
    const ordersKept = allOrders.filter((order) => {
        return order.NewCoffee !== deletedOrder
    })
    saveOrders(ordersKept);
}


module.exports = {

    convertOrder,
    addOrder,
    listOrders,
    removeOrder,

}