const express = require("express");
const cors = require("cors")
const env = require("./config/envConfig");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
<<<<<<< HEAD
const brandRoutes = require("./routes/brandRoutes")
=======
const categoryRoutes = require("./routes/categoryRoutes");
const modelRoutes = require("./routes/modelRoutes")
>>>>>>> main
const app = express();

//database connection 
connect();
app.use(cors())
//add middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Welcome to autoparts" });
});
//user routes
app.use("/api", userRoutes);
<<<<<<< HEAD
app.use("/api", brandRoutes);
=======
app.use("/api", categoryRoutes);
app.use("/api", modelRoutes);
>>>>>>> main

const port = env.PORT || 3000;

app.listen(port, () => {
    console.log("Port - " + port);
});