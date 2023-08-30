const Users = require('./users')
const Products = require('./products')
const Orders = require('./orders')

// Export all objects
module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders()
}