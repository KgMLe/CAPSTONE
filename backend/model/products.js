const db = require ("../config")

//______________________________________________
class Products{
    // fetch all products
    fetchProducts(req,res){
            const query =`
            SELECT *
            FROM products;
            `
            db.query(query,
                (err,results) => {
                    if(err) throw err
                    res.json({ 
                        status:res.statusCode,
                        results
                    })
                })
    }
    // fetch single product
    fetchProduct(req, res){
        const query = `
        SELECT *
        FROM products
        WHERE prodID = ?;
        `
        db.query(query, [req.params.id], (err, result) => {
            if (err) { 
                console.error(err);
                res.status(500).json({
                    error: "An error occurred while fetching the user.",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    //register
    addProduct(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO products
        SET ?;
        `;
    
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error registering product:", err);
                return res.status(500).json({
                    status: 500,
                    error: "Failed to register product"
                });
            }
    
            res.json({
                status: res.statusCode,
                msg: "Product registered successfully"
            });
        });
    }
    //update product
    updateProduct(req, res){
        const data = req.body
        const query =`
        UPDATE products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query,[data, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"Product updated."
                })
            })
    }
    //delete product
    deleteProduct(req,res){
        const query =
         `
        DELETE FROM products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'Product deleted.'
        })
        })
    }
}

module.exports  = Products;