const express = require("express");
const router = express.Router();
const brandValidations = require("../validations/brand.validation");
const Brand = require("../controllers/brand.controller");
const Model = require("../controllers/model.controller");
const Authorization = require("../services/Authorization");

router.post("/", [brandValidations, Authorization.authorized], Brand.create);
router.get("/", Authorization.authorized, Brand.brands);
// router.get("/allbrands", Authorization.authorized, Brand.allBrands)
router.get("/:id", Authorization.authorized, Brand.fetchBrand);
router.get("/:id/model", Authorization.authorized, Model.getModelsByBrand);
router.put("/:id", [brandValidations, Authorization.authorized], Brand.updateBrand);
router.delete("/:id", Authorization.authorized, Brand.deleteBrand);

module.exports = router;
