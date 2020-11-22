
const express = require("express");
const app = express();

const mongoose = require('mongoose');

//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
const bodyParser = require('body-parser');
app.set("View engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));
module.exports= class Quiz_solve{
 

  async  fun(res){
    
    mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/Studentdbex',{ useNewUrlParser: true, useUnifiedTopology: true });
    const result=await Quiz.findById('5fb9dfb81ebb4ead07fc9ff4');
    console.log(result);
    res.render("osi.ejs",{result:result});
   /* 
 mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/Studentdbex',{ useNewUrlParser: true, useUnifiedTopology: true }, async(err, db)=>{
            if (err) throw err;
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

        const con=mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/Studentdbex',{ useNewUrlParser: true, useUnifiedTopology: true });

        }
       
        
      }


 