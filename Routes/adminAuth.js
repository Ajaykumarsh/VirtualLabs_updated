
const passport = require('passport')
const express = require('express')
const router = express.Router();
const cookieSession = require('cookie-session')
const bodyParser=require('body-parser');
const { Passport } = require('passport');
require('../public/js/adminconf')


const cook=(req,res,next)=>{
    cookieSession({
        name: 'Adminsession',
    keys: ['key1', 'key2']
    })
    next();
}
const bodyPar=bodyParser.urlencoded({extended:false});
// const pass=(req,res,next)=>{passport.initialize();next()}
// const sess=(req,res,next)=>{passport.session();next();}
// router.use(cookieSession({
//     name: 'Adminsession',
//     keys: ['key1', 'key2']
// }))
// router.use(bodyParser.urlencoded({extended:false}))
 router.use(passport.initialize());
 router.use(passport.session());


router.get('/google',bodyPar,cook,
    passport.authenticate('google', { scope: ['profile', ['email']] }));

router.get('/google/callback',bodyPar,cook,
    passport.authenticate('google', { failureRedirect: '/loginDirect' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.send(req.user.displayName);
    });



module.exports = router



