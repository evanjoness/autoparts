const express = require("express");
const router = new express.Router();
const Model = require("../controllers/model.controller");
const Product = require("../controllers/product.controller");
const Authorization = require("../services/Authorization");

router.post("/", Authorization.authorized, Model.create);
router.get("/", Authorization.authorized, Model.getAll);
router.get("/:id/product", Authorization.authorized, Product.getProductsByModel);

module.exports = router;
