const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const app = express();
//const Knex = require('knex');
const mysql = require('mysql');
//create controller
router.post('/register', authController.register);



const connectWithUnixSockets = async config => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
  // Establish a connection to the database
  return mysql.createPool({
    user: 'root', // e.g. 'my-db-user'
    password: 'u6pogl3ysxP7ehBp',
    database: 'hackathon-2022-db',
    // If connecting via unix domain socket, specify the path
    socketPath: 'adroit-groove-345318:us-central1:hackathon-2022-db',
   ...config
  });
};




//get login info
app.post('/login', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    let passwordConfirm = req.body.passwordConfirm;
    if (password == passwordConfirm)
    {
        let salt1 = "testinghashSALT1";
        let salt2 = "testinghashSALT2";

        //Temporary salting
        name += salt1;
        password += salt2;
        let password_h = crypto.createHash('sha512').update(password_hash).digest('hex'); //We can use a different algo if service becomes slow
        let name_h = crypto.createHash('sha512').update(username_hash).digest('hex');

        //COMPARE PASSWORD COLUMN WITH password_h FROM DATABASE WHERE USER == name_h
        con.connect(function(err) {
            if (err) throw err;
            let result = con.query("SELECT Login_name FROM Account WHERE Password='"+name+"'", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
            if (result == password_h)
            {
                res.send("Success");
            }
        });
    }
});

//register user
app.post('/register', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;;
    let passwordConfirm = req.body.passwordConfirm;
    if (password == passwordConfirm)
    {
        let salt1 = "testinghashSALT1";
        let salt2 = "testinghashSALT2";

        //Temporary salting
        name += salt1;
        password += salt2;
        let password_h = crypto.createHash('sha512').update(password_hash).digest('hex'); //We can use a different algo if service becomes slow
        let name_h = crypto.createHash('sha512').update(username_hash).digest('hex');
        
        //ADD ALL ITEMS TO APPROPRIATE
        //Add to Account
        con.connect(function(err) {
            if (err) throw err;
            let result = con.query("INSERT INTO Account (Login_name, Password) VALUES ('"+name+"','"+password_h+"')", function (err, result, fields) {
              if (err) throw err;
                console.log(result);
            });
        });
    }
});


module.exports = router; 

const closeConnection = () => {
  if (!knex) knex.destroy();
  logger.info('DB connection closed.');
};
