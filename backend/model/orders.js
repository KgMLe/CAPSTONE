const db = require ("../config")

// fetch all orders
class Orders{

  // fetchallorders
fetchOrders(req, res) {
    const query = `
    select o.orderID, u.firstName,u.lastName, p.prodName, p.prodUrl, p.prodPrice, u.userAdd
    from orders o
    inner join 
    users u
    using (userID)
    inner join 
    products p
    using (prodID)
    ;
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
  }

  // fetch order by id
  fetchOrder(req, res) {
    const query = `
    select o.orderID, u.firstName, u.lastName,p.prodName, p.prodUrl, p.prodPrice, u.userAdd
    from orders o
    inner join 
    users u
    using (userID)
    inner join 
    products p
    using (prodID)
    where o.orderID = ${req.params.id};
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
  }

//   add order
addOrder(req, res) {
    const query = `
    insert into orders
    set ?
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
  }

  // update order by id
  updateOrder(req, res) {
    const query = `
    update orders
    set ?
    where orderID = ${req.params.id};
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
  }
  
  // delete order by id
  deleteOrder(req, res) {
    const query = `
    delete from orders
    where orderID = ${req.params.id};
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
  }

}

module.exports =  Orders