const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const app = express();
//create controller
router.post('/register', authController.register);

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
    }
});


module.exports = router; 
