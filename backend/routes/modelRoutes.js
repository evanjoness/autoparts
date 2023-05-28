const express = require("express");
const router = new express.Router();
const Model = require("../controllers/Model");
const Authorization = require("../services/Authorization");

const modelController = new Model(); // Create an instance of the Model class

router.post("/create-model", Authorization.authorized, modelController.create.bind(modelController));
module.exports = router;
