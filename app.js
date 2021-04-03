require("newrelic");
const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");

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

app.get("/ExceptionalHand", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ExceptionalHand.html"));
});
app.get(
  ["/cn", "/cpl", "/syssoft", "/aiml", "/cybsec", "/ada", "/dbms"],
  checkUser,
  (req, res) => {
    // res.sendFile(path.join(__dirname, "views", "cn.html"));
    res.sendFile(path.join(__dirname, "views/Templets", "subjectTemplet.html"));
  }
);
app.get("/lab", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views/Templets", "labTemplet.html"));
});

app.get("/networkutilities", checkUser, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "networkutilities.html"));
});

app.get("/[1-8]", checkUser, (req, res) => {
  // res.sendFile(path.join(__dirname, "views", "5sem.html"));
  res.sendFile(path.join(__dirname, "views/Templets", "semTemplet.html"));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
