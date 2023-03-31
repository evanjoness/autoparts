const express = require("express");
const env = require("./config/envConfig")
const connect = require("./config/db")
const app = express();

//database connection 
connect();

app.get("/", (req, res) => {
    res.json({ msg: "Welcome to autoparts" });
});

const port = env.PORT || 3000;

app.listen(port, () => {
    console.log("Port - " + port);
});