
const express = require("express");
const app = express();

var MongoClient = require('mongoose')
//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
const bodyParser = require('body-parser');
app.set("View engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));
module.exports= class Quiz_solve{
 

  async  fun(res){
    
    const con=MongoClient.connect(process.env.MONGO_URI||"mongodb://localhost/Studentdbex");
    con.on('open',()=>{console.log("ola");})
    /* 
    MongoClient.connect(process.env.MONGO_URI||'mongodb://localhost:27017/Studentdbex',{ useNewUrlParser: true, useUnifiedTopology: true }, (err, db)=>{
            if (err) {console.log("con"); throw err};
            
            
            var dbo = db.db("Studentdbex");// DB name(Studentdbex)
           //get the contents from Quiz collection 
            await dbo.collection("Quiz").findOne({}, function(err, result) {
              if (err) throw err;
                else{
                    // console.log(result);
                     
                    res.render("osi.ejs",{result:result});


                    
                   
                }
               
            
              db.close();
              
            });
            
          });
          */

        
        }
       
        
      }


 