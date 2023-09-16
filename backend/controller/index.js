const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// const { veriyfyToken } = require('../middleware/AuthenticateUser');
// const {users, books,authors,orders} = require('../model')


//----import all model objects----
const { users } = require("../model");
const { products } = require("../model");
const { orders } = require("../model");
const { admin }  = require("../model");


//-----------routing to USERS-----------------------
//fetch all user
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
//fetch 1 user
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
 
//register user
routes.post("/user/new", bodyParser.json(), (req, res) => {
  users.addUser(req, res);
});
//update user
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
//delete user
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
//login a user 
routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res);
  });
// login an admin
routes.post("/admin", bodyParser.json(), (req, res) => {
  users.adminLogin(req, res);
});
// _______________________________________________________________________
//PRODUCTS

//get all products
routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});

// getting one product
routes.get("/product/:id", (req, res) => {
  products.fetchProduct(req, res);
});
 
//add protect
routes.post("/product/new", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});

// update product
routes.patch("/product/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});

// delete product
routes.delete("/product/:id", (req, res) => {
  products.deleteProduct(req, res);
});

// __________________________________________________________
// ORDERS

//get all orders

routes.get("/orders", (req, res) => {
  orders.fetchOrders(req, res);
})
//getting one order 
routes.get("/order/:id", (req, res) => {
  orders.fetchOrder(req, res);
})
// get user order
routes.get("/user/:id/orders", (req, res) => {
  orders.fetchUserOrders(req, res);
}),

// add order
routes.post("/order/new",  bodyParser.json(),(req, res)=>{
  orders.addOrder(req, res)
})
// update order
routes.patch("user/:id/order/:id", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
})
// delete order
routes.delete("user/:id/order/:id", (req, res) => {
  orders.deleteOrder(req, res);
})
 

module.exports = {
  express,
  routes,
}