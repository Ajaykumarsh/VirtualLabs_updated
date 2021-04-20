
const passport = require('passport')
const express = require('express')
const router = express.Router();
const cookieSession = require('cookie-session')
const bodyParser=require('body-parser');
const { Passport } = require('passport');
const excelW=require('excel4node')
const path=require('path')
const excelR=require('exceljs')
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
        // res.send(`Welcome ${req.user.displayName}`);
        // res.sendFile(path.join(__dirname, "../views/Templets", "Results.html"));
        //res.sendFile(path.join(__dirname, "../views/Templets", "Chart.html"));
        // res.send(req.user)
        res.redirect('/admin/page')
        
        else
        res.send("olaola")
    });
router.get('/page',checkAdmin,(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/Templets", "Chart.html"));
})
function checkAdmin(req,res,next){
    if(Object.keys(req.sessionStore.sessions).length){
        next();
    }else{
        res.redirect('/loginDirect')
    }
}
router.get("/google/logout",bodyPar,cook,(req,res)=>{
    req.session=null;
    req.logout();
    res.redirect('/loginDirect');
});



router.get('/StudentRes',bodyPar,(req,res)=>{
    wb=new excelR.Workbook();
  wb.xlsx.readFile('./public/ExcelData/A.xlsx').then(()=>{
    ws=wb.getWorksheet('Computer Programming Laboratory')
    var rowCount=(ws.getRow(1).getCell(1).value);
    var colCount=(ws.getRow(1).getCell(2).value);
    var obj={};
    for(let i=2;i<=rowCount;i++){
        obj[`${ws.getRow(i).getCell(1).value}`]=ws.getRow(i).getCell(colCount).value;
    }
    res.send(obj)
  })

})




module.exports = router



