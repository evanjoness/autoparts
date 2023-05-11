const express = require("express");
const router = express.Router();
const categoryValidations = require("../validations/categoryValidations");
const Category = require("../controllers/Category");
const Authorization = require("../services/Authorization");
router.post("/create-category", [categoryValidations, Authorization.authorized], Category.create);
router.get("/categories/:page",  Category.categories);
module.exports = router;