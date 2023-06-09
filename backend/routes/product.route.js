const express = require("express");
const router = express.Router();
const Product = require("../controllers/product.controller");
const Authorization = require("../services/Authorization");

router.post("/", Authorization.authorized, Product.create);
router.get("/", Authorization.authorized,  Product.getAll);
router.get("/:id", Authorization.authorized, Product.getById);
router.put("/:id", Authorization.authorized, Product.update);
router.delete("/:id", Authorization.authorized, Product.delete);

module.exports = router;
