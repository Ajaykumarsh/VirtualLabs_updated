const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
("use strict");

var sessionstorage = require("sessionstorage");
const likes = require("../public/model/LikeDB");

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
const path = require("path");
const session = require("express-session");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const checkUser = (req, res, next) => {
  if (req.session.usn == undefined) {
    res.redirect("/StudentAuthentication/Authentication");
  } else {
    next();
  }
};

router.get("/lab", checkUser, async (req, res) => {
  var subject = req.query.sub;
  var lab_prog = req.query.lab;
  var subject_post = req.query.sub_post;
  var lab_prog_post = req.query.lab_post;

  var stu_usn = req.session.usn;
  var no_like = 0;
  var clicked_or_not = false;

  if (subject_post && lab_prog_post) {
    console.log("from post");
    console.log(subject_post + " " + lab_prog_post);
    likes
      .find()
      .then((result) => {
        for (var i = 0; i < result.length; i++) {
          if (
            subject_post === result[i].sub &&
            lab_prog_post == result[i].labno
          ) {
            no_like = result[i].like;
            // console.log(no_like + " " + res[i].like);
            for (var j = 0; j < result[i].checked.length; j++) {
              if (stu_usn === result[i].checked[j].usn) {
                clicked_or_not = result[i].checked[j].clicked;
                // console.log("coming inside for loop");
              }
            }
          }
        }
        var arr = [no_like, clicked_or_not];
        res.render("Templets/labtemplate.ejs", { arr: arr });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("from get");
    likes
      .find()
      .then((result) => {
        for (var i = 0; i < result.length; i++) {
          if (subject === result[i].sub && lab_prog == result[i].labno) {
            no_like = result[i].like;
            // console.log(no_like + " " + res[i].like);
            for (var j = 0; j < result[i].checked.length; j++) {
              if (stu_usn === result[i].checked[j].usn) {
                clicked_or_not = result[i].checked[j].clicked;
                // console.log("coming inside for loop");
              }
            }
          }
        }
        var arr = [no_like, clicked_or_not];
        res.render("Templets/labtemplate.ejs", { arr: arr });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.post("/lab", checkUser, urlencodedParser, async (req, res) => {
  // console.log(req.body);
  // console.log(req.body.sub);
  // console.log(req.body.labno);
  console.log("coming inside post");

  const usn = req.session.usn;
  const sub = req.body.sub;
  // console.log(usn);
  const labno = req.body.labno;

  var global_click = false;
  var global_like_count = 0;
  var likecount = 0;
  var clicked = false;
  var Flag = false;
  var update_clicked = false;
  var l = 0,
    m = 0;
  var usn_flag = false;
  var hash = new Object();
  await MongoClient.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/Studentdbex",
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    async (err, db) => {
      if (err) throw err;
      var dbo = db.db("Studentdbex"); // DB name(Studentdbex)
      var res = null;
      console.log("coming inside mongoclient");
      await likes.find().then(async (result) => {
        res = result;
        // db.close();
      });
      if (usn === null) {
        return;
      }
      //------------------checks if sub and lab is already present in the document by using the counter----------------------
      if (res.length > 0) {
        var sub_not_present = 0; //checks if the sub is already present or not in the document
        var lab_not_present = false; //checks if the lab is present or not in the document
        for (var i = 0; i < res.length; i++) {
          if (sub === res[i].sub) {
            if (labno == res[i].labno) lab_not_present = true;
          }
          if (sub !== res[i].sub) {
            sub_not_present++;
          }
        }
        console.log(
          sub_not_present + " " + res.length + " Lab " + lab_not_present
        );
        if (sub_not_present === res.length || lab_not_present === false) {
          //if the sub or lab is not there in the document if becomes true and Flag is set to add new object
          console.log("coming inside new sub");
          Flag = true;
        }
      }
      //-----------------------------------------------------------------------------------

      if (res.length == 0) {
        // initially when the doument is empty this if becomes true then Flag is set to true to add new object
        console.log("inside of result is null");
        Flag = true;
        global_click = true;
        global_like_count = 1;
      } else {
        for (var i = 0; i < res.length; i++) {
          // checking if sub exist and also the labn exist
          if (sub === res[i].sub && labno == res[i].labno) {
            var reach_check_usn = 0;
            for (var j = 0; j < res[i].checked.length; j++) {
              if (usn !== res[i].checked[j].usn) {
                reach_check_usn++;
              }
              // check usn for particular subject and labno
              if (usn === res[i].checked[j].usn) {
                clicked = res[i].checked[j].clicked;
                //this if is when user tries to take back his like
                if (clicked) {
                  clicked = false;
                  update_clicked = true;
                  var like = res[i].like;
                  likecount = like - 1;
                  global_click = clicked;
                  global_like_count = likecount;
                  break;
                } else {
                  clicked = true;
                  update_clicked = true;
                  var like = res[i].like;
                  likecount = like + 1;
                  global_click = clicked;
                  global_like_count = likecount;
                  break;
                }
              }
            }
            //logic to add new usn to specific sub and lab no
            if (reach_check_usn === res[i].checked.length) {
              var like_count = res[i].like;
              like_count = like_count + 1;
              global_click = true;
              global_like_count = like_count;
              await dbo.collection("likes").updateOne(
                {
                  $and: [{ sub: sub }, { labno: parseInt(labno) }],
                },
                {
                  $push: {
                    checked: { usn: usn, clicked: true },
                  },
                }
              );
              await dbo.collection("likes").updateOne(
                { $and: [{ sub: sub }, { labno: parseInt(labno) }] },
                {
                  $set: {
                    like: like_count,
                  },
                }
              );
            }
          }

          if (update_clicked) {
            global_click = clicked;
            global_like_count = likecount;

            //array to display in front end
            arr = [global_like_count, global_click];
            const filter = {
              sub: sub,
              labno: labno,
              "checked.usn": usn,
            };
            const update = {
              $set: { "checked.$.clicked": clicked },
            };
            await dbo.collection("likes").updateOne(
              {
                $and: [
                  { sub: sub },
                  { labno: parseInt(labno) },
                  { "checked.usn": usn },
                ],
              },
              update,
              function (err, res) {
                if (err) throw err;
                // console.log("updated");
              }
            );
            await dbo.collection("likes").updateOne(
              {
                $and: [{ sub: sub }, { labno: parseInt(labno) }],
              },
              {
                $set: {
                  like: likecount,
                },
              }
            );
          }
        }
      } //else ends here

      //code that is executed when there is no document in the DB
      //adding the collection Likes to db
      if (Flag) {
        console.log("inside flag");
        var l = new likes({
          sub: sub,
          labno: labno,
          checked: [
            {
              usn: usn,
              clicked: true,
            },
          ],

          like: 1,
        });
        l.save();
      }
    }
  );
  //mongoclient ends here
  // var string = encodeURIComponent("cs");
  res.redirect("/labs/lab/?sub_post=" + sub + "&lab_post=" + labno);
});

module.exports = router;
