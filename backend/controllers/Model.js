const formidable = require('formidable');
// const {validationResult} = require("express-validator")
class Model {
    async create(req, res){
        // Your implementation for the create method
        const form = formidable({ multiples: true });
        form.parse(req,(err, fields)=>{
            if(!err){
                // console.log("fields: ", fields);
                const parsedData = JSON.parse(fields.data);
                // req.body.brandId = parsedData.brandId;
                // req.body.model = parsedData.model;
                // req.body.year = parsedData.year;
                // req.body.carBody = parsedData.carBody;
                // req.body.carEngine = parsedData.carEngine;
                // req.body.enginePower = parsedData.enginePower;
                // const errors = validationResult(req);
                const errors = [];
                const d = new Date();
                let currentYear = d.getFullYear();
                if (parsedData.brandId.trim().length === 0) {
                  errors.push({ msg: "car brand is required" });
                }
                if (parsedData.model.trim().length === 0) {
                  errors.push({ msg: "car model is required" });
                }
                if (
                  parseInt(parsedData.year) < 1950 ||
                  parseInt(parsedData.year) > currentYear
                ) {
                  errors.push({
                    msg: "year cannot be lower than 1950 or bigger than current",
                  });
                }
                if (parsedData.carBody.trim().length === 0) {
                  errors.push({ msg: "car body is required" });
                }
                if (parsedData.carEngine.trim().length === 0) {
                  errors.push({ msg: "car engine is required" });
                }
                if (parsedData.enginePower.trim().length === 0) {
                  errors.push({ msg: "engine power is required" });
                }
                if(errors.length===0){

                }else{
                    return res.status(400).json({errors})
                }
                console.log("errors: ", errors);
            }
        })
    }
}

module.exports = Model;
