const express = require("express");
const router = express.Router();
const brandValidations = require("../validations/brandValidations");
const Brand = require("../controllers/Brand");
const Authorization = require("../services/Authorization");
router.post("/create-brand", [brandValidations, Authorization.authorized], Brand.create);
router.get("/brands/:page", Authorization.authorized,  Brand.brands);
router.get("/fetch-brand/:id", Authorization.authorized, Brand.fetchBrand);
router.put("/update-brand/:id", [brandValidations, Authorization.authorized], Brand.updateBrand);
router.delete("/delete-brand/:id", Authorization.authorized, Brand.deleteBrand);
router.get("/allbrands", Authorization.authorized, Brand.allBrands)
module.exports = router;