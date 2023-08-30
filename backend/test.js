require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express();
const {routes} = require('./controller/index')
const cookieParser = require("cookie-parser");
const errorHandling  = require("./middleware/ErrorHandling");
const cors = require('cors')
const port = +process.env.PORT || 3000;
// Importing error handling middleware
// Middleware - APplication level
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});
// cookieParser & Router
// cookieParser should be set before router


app.use(
  express.static('./static'),
  express.urlencoded({
      extended: false
  }),
  cookieParser(),
  cors(),
)

app.use('/api', require('./controller/index'))
// // Handling all errors
// app.use(errorHandling);
// // Server

app.get("^/$|/poin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./view/index.html"));
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});


// updateProduct(req, res) {
//   const query = `
//   UPDATE products
//   SET prodName = '${req.body.prodName}',
//   prodPrice = '${req.body.prodPrice}',
//   prodDesc = '${req.body.prodDesc}',
//   prodUrl = '${req.body.prodUrl}'
//   WHERE prodID = ${req.params.id};
//   `
//   db.query(query, (err, result) => {
//       if (err) {
//           console.log(err)
//       } else {
//           res.send(result)
//       }
//   })
// }