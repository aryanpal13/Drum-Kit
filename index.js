const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("drumSet.ejs");
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});