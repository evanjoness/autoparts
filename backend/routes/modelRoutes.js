const express = require("express");
const router = new express.Router();
const Model = require("../controllers/Model");
const Authorization = require("../services/Authorization");
router.post("/create-model",[Authorization.authorized], Model.create);
router.get("/models/:page", Authorization.authorized, Model.get);
module.exports = router;