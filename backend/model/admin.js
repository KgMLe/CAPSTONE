const db = require ("../config")
// const {hash, compare, hashSync} = require ('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser')

class Admin {
  adminLogin(req, res) {
    const { userEmail, userPass } = req.body;
    // query
    const query = `
      SELECT userID, firstName, lastName, userEmail, userPass, userRole, userAdd
      FROM users
      WHERE userEmail = '${userEmail}' AND userRole = 'admin';
    `;  
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email or you are not an Admin."
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // Create a token
          const token = createToken({
            userEmail,
            userPass
          });
  
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0]
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered as a user"
            });
            console.log(token);
          }
        });
      }
    });
  }
  
}

module.exports = Admin;