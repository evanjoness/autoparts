const {body} = require("express-validator");
module.exports = [body("name").not().isEmpty().trim().escape().withMessage("brand is required")];