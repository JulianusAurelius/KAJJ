const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

// const db = mysql.createConnection({
//     //or IP address
//     host: process.env.DATABASE_HOST, 
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE

// });
//html, css link
const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));
//parse url encoded bodies
app.use(express.urlencoded({ extended:false }));
//parse JSON bodies
app.use(express.json());

// app.set('view engine', 'hbs');

// db.connect( (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log('mysql connected...')
//     }
// })
// //link routes
// app.use('/', require('./routes/pages'));
// app.use('/auth', require('./routes/auth'));


app.listen(8080, () => { 
    console.log('Server started on port 5001');
})

app.get('/views/index.hbs', (req, res) => {
    res.sendFile(__dirname + '/views/index.hbs');
});

app.get('/views/login.hbs', (req, res) => {
    res.sendFile(__dirname + '/views/login.hbs');
});

app.get('/views/register.hbs', (req, res) => {
    res.sendFile(__dirname + '/views/register.hbs');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//For Courses
app.get('/intro.html', (req, res) => {
    res.sendFile(__dirname + '/intro.html');
});

app.get('/level1.html', (req, res) => {
    res.sendFile(__dirname + '/level1.html');
});

app.get('/portalindex.html', (req, res) => {
    res.sendFile(__dirname + '/portalindex.html');
});

app.get('/login2.html', (req, res) => {
    res.sendFile(__dirname + '/login2.html');
});

app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.get('/back-retry2.png', (req, res) => {
    res.sendFile(__dirname + '/back-retry2.png');
});

app.get('/knight-hurt2-retry.png', (req, res) => {
    res.sendFile(__dirname + '/knight-hurt2-retry.png');
});

app.get('/knight-retry3.png', (req, res) => {
    res.sendFile(__dirname + '/knight-retry3.png');
});

app.get('/EmailJS.html', (req, res) => {
    res.sendFile(__dirname + '/EmailJS.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/');
});

app.get('/logo.png', (req, res) => {
    res.sendFile(__dirname + '/logo.png');
});

app.get('/Aboutus.jpg', (req, res) => {
    res.sendFile(__dirname + '/Aboutus.jpg');
});

app.get('/Algebra.jpg', (req, res) => {
    res.sendFile(__dirname + '/Algebra.jpg');
});

app.get('/Data-science.jpg', (req, res) => {
    res.sendFile(__dirname + '/Data-science.jpg');
});

app.get('/Geography.jpg', (req, res) => {
    res.sendFile(__dirname + '/Geography.jpg');
});

app.get('/intro1.css', (req, res) => {
    res.sendFile(__dirname + '/intro1.css');
});

app.get('/lvl1.css', (req, res) => {
    res.sendFile(__dirname + '/lvl1.css');
});

app.get('/lvl2.css', (req, res) => {
    res.sendFile(__dirname + '/lvl2.css');
});

app.get('/History.jpg', (req, res) => {
    res.sendFile(__dirname + '/History.jpg');
});

app.get('/Web.jpg', (req, res) => {
    res.sendFile(__dirname + '/Web.jpg');
});

app.get('/aboutus.html', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
});

app.get('/afterclass.jpg', (req, res) => {
    res.sendFile(__dirname + '/afterclass.jpg');
});

app.get('/biggr.jpg', (req, res) => {
    res.sendFile(__dirname + '/biggr.jpg');
});

app.get('/c-program.jpeg', (req, res) => {
    res.sendFile(__dirname + '/c-program.jpeg');
});

app.get('/calculus.jpg', (req, res) => {
    res.sendFile(__dirname + '/calculus.jpg');
});

app.get('/course.html', (req, res) => {
    res.sendFile(__dirname + '/course.html');
});

app.get('/detail.html', (req, res) => {
    res.sendFile(__dirname + '/detail.html');
});

app.get('/game.jpg', (req, res) => {
    res.sendFile(__dirname + '/game.jpg');
});

app.get('/homeschool.jpg', (req, res) => {
    res.sendFile(__dirname + '/homeschool.jpg');
});

app.get('/kid.jpg', (req, res) => {
    res.sendFile(__dirname + '/kid.jpg');
});

app.get('/learning.jpg', (req, res) => {
    res.sendFile(__dirname + '/learning.jpg');
});

app.get('/middle.jpg', (req, res) => {
    res.sendFile(__dirname + '/middle.jpg');
});

app.get('/mypic.jpg', (req, res) => {
    res.sendFile(__dirname + '/mypic.jpg');
});

app.get('/online.jpg', (req, res) => {
    res.sendFile(__dirname + '/online.jpg');
});

app.get('/price.html', (req, res) => {
    res.sendFile(__dirname + '/price.html');
});

app.get('/smalgr.jpg', (req, res) => {
    res.sendFile(__dirname + '/smalgr.jpg');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/trigonometric.jpg', (req, res) => {
    res.sendFile(__dirname + '/trigonometric.jpg');
});

app.get('/world.jpg', (req, res) => {
    res.sendFile(__dirname + '/world.jpg');
});

app.get('/knight2-retry2.png', (req, res) => {
    res.sendFile(__dirname + '/knight2-retry2.png');
});

app.get('/zombie1-retry2.png', (req, res) => {
    res.sendFile(__dirname + '/zombie1-retry2.png');
});

app.get('/zombie1-hurt-retry2.png', (req, res) => {
    res.sendFile(__dirname + '/zombie1-hurt-retry2.png');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/script2.js', (req, res) => {
    res.sendFile(__dirname + '/script2.js');
});

app.get('/knight-hurt2-retry2.png', (req, res) => {
    res.sendFile(__dirname + '/knight-hurt2-retry2.png');
});

//route to level2 page
app.get('/level2.html*', (req, res) => {
    res.sendFile(__dirname + '/level2.html');
});


//const Knex = require('knex');



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
const closeConnection = () => {
  if (!knex) knex.destroy();
  logger.info('DB connection closed.');
};

