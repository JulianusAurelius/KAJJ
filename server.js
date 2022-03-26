const express = require('express'); //include express
const app = express(); //express.js app
const bodyParser = require('body-parser'); //middle ware

app.use(bodyParser.urlencoded({ extended: false}));

//route to homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//route to login page
app.get('/RowdyHacks', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

//post request login
app.post('/RowdyHacks', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send('Username: ${username} Password ${password}');
});
//post request register
app.post('/RowdyHacks', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
})
//asign port
const port = 3000
//fuction to listen to port
app.listen(port, () => console.log('is on port ${port}'));


