require("newrelic");
const express = require("express");
const app = express();
const session = require("express-session");
const path=require('path')

const studentRouter = require("./Routes/StudentAuth.js");
const quiz_solution = require("./Routes/quiz_solution.js");
const adminRouter = require("./Routes/adminAuth.js");

const compile = require("./public/js/compile.js");
const bodyParser = require("body-parser");

app.set("View engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Register Shit
app.use(
  session({
    secret: "secretekey",
    resave: false,
    saveUninitialized: false,
    name: "StudentUSN",
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
    },
  })
);

app.use("/StudentAuthentication", studentRouter);
app.use("/quiz", quiz_solution);
app.use("/admin", adminRouter);

const checkUser = (req, res, next) => {
  if (req.session.usn == undefined) {
    res.redirect("/StudentAuthentication/Authentication");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/loginDirect", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "LoginDirect.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get("/titles", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "titles.html"));
});
app.get("/datastructures", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "datastructures.html"));
});
app.get("/stack", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "stack.html"));
});
app.get("/compile", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "compile.html"));
});


app.post("/compile", checkUser, (req, res) => {
  // const sourcecode = req.body.code;// stores the source code
  const test = ""; //stores the input
  var language = "c";
  const sourcecode = req.body.code;
  console.log(sourcecode);
  let c = new compile();
  c.com(sourcecode, test, language);
  res.redirect("/compile");
});
app.get("/placement", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "placement.html"));
});
app.get("/problem1", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "problem1.html"));
});
app.get("/problem2", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "problem2.html"));
});
app.get("/problem3", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "problem3.html"));
});
app.get("/ExceptionalHand", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ExceptionalHand.html"));
});
app.get("/cn", checkUser, (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "cn.html"));
  res.sendFile(path.join(__dirname, "views/Templets", "subjectTemplet.html"));
});
app.get("/networkutilities", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "networkutilities.html"));
});

app.get("/2nd", checkUser, (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "2ndsem.html"));
  res.sendFile(path.join(__dirname, "views/Templets", "semTemplet.html"));
});
app.get("/5th", checkUser, (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "5sem.html"));
  res.sendFile(path.join(__dirname, "views/Templets", "semTemplet.html"));
});
app.get("/cpl_labs", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "cpl_labs.html"));
});
app.get("/cpl", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/Templets", "subjectTemplet.html"));
});

//Cn Labs routes

app.get("/cn_lab", checkUser, (req, res) => {
  // res.sendFile(path.join(__dirname, "views/cnlab", "cnlab1.html"));
  res.sendFile(path.join(__dirname, "views/Templets", "labTemplet.html"));
});
app.get("/cn_lab2", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab2.html"));
});
app.get("/cn_lab3", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab3.html"));
});
app.get("/cn_lab4", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab4.html"));
});
app.get("/cn_lab5", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab5.html"));
});
app.get("/cn_lab6", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab6.html"));
});
app.get("/cn_lab7", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab7.html"));
});
app.get("/cn_lab8", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab8.html"));
});
app.get("/cn_lab9", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab9.html"));
});
app.get("/cn_lab10", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab10.html"));
});
app.get("/cn_lab11", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab11.html"));
});
app.get("/cn_lab12", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab12.html"));
});
app.get("/cn_lab13", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab13.html"));
});
app.get("/cn_lab14", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab14.html"));
});
app.get("/cn_lab15", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab15.html"));
});
app.get("/cn_lab16", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab16.html"));
});
app.get("/cn_lab17", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab17.html"));
});
app.get("/cn_lab18", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/cnlab", "cnlab18.html"));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
