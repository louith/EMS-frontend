const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Parsing middleware
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Static files
app.use(express.static("public"));

//Templating engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Router
// app.get("/", (req, res) => {
//   res.render("home");
// });

const routes = require("./server/routes/user");
app.use("/", routes);

// app.get("/dtr", (req, res) => {
//   res.render("dtr");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
