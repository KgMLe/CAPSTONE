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
  // 


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

//user order
fetchUserOrder(req, res) {
  const query = `
  select o.orderID, u.firstName, u.lastName,p.prodName, p.prodUrl, p.prodPrice, u.userAdd
  from orders o
  inner join 
  users u
  using (userID)
  inner join 
  products p
  using (prodID)
  where u.userID = ${req.params.id};
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
    const data = req.body;
    const query = `
    INSERT INTO orders
    SET ?;
    `;

    db.query(query, [data], (err) => {
        if (err) {
            console.error("Error adding order:", err);
            return res.status(500).json({
                status: 500,
                error: "Failed to add order"
            });
        }

        res.json({
            status: res.statusCode,
            msg: "Order added successfully"
        });
    });
  }

  // update order by id
//   updateOrder(req, res) {
//     const query = `
//     update orders
//     set ?
//     where orderID = ${req.params.id};
//     `
//     db.query(query,[data, req.params.id],
//         (err) => {
//             if(err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg:"Product updated."
//             })
//         })
//   }
  
  // delete order by id
  deleteOrder(req, res) {
    const query = `
    delete from orders
    where orderID = ${req.params.id};
    `
    db.query(query, (err) => {
        if(err) throw err
        res.json({
    status:res.statusCode,
    msg:'Order deleted.'
    })
    })
  }

}

module.exports =  Orders