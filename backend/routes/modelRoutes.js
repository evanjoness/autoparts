const express = require("express");
const router = new express.Router();
const Model = require("../controllers/Model");
const Authorization = require("../services/Authorization");
router.post("/create-model",Authorization.authorized, Model.create);
module.exports = router;