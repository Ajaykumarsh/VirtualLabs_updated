
const passport = require('passport')
const express = require('express')
const router = express.Router();
const cookieSession = require('cookie-session')
const bodyParser=require('body-parser');
const { Passport } = require('passport');
require('../public/js/adminconf')




const mongoose=require('mongoose')
mongoose.connect( process.env.MONGO_URI ||'mongodb://localhost:27017/Studentdbex',{ useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection
con.on('open', function () { console.log("mogoDBAdmin connection established  successfully..!") })
const admins=require('../public/model/AdnimDB')

const cook=(req,res,next)=>{
    cookieSession({
        name: 'AdminSession',
    keys: ['key1', 'key2']
    })
    next();
}
const bodyPar=bodyParser.urlencoded({extended:false});

 router.use(passport.initialize());
 router.use(passport.session());


router.get('/google',bodyPar,cook,
    passport.authenticate('google', { scope: ['profile', ['email']] }));

router.get('/google/callback',bodyPar,cook,
    passport.authenticate('google', { failureRedirect: '/loginDirect' }),
     async(req, res)=> {
        // Successful authentication, redirect home.
        const admin=await admins.findById(req.user._json.email)
        if(admin)
        res.send(`Welcome ${req.user.displayName}`);
        else
        res.send("olaola")
    });


router.get("/google/logout",bodyPar,cook,(req,res)=>{
    req.session=null;
    req.logout();
    res.redirect('/loginDirect');
});



module.exports = router



