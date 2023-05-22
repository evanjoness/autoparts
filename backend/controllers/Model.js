const formidable = require("formidable");
const carModelSchema = require("../models/CarModel");
const Brand = require("../models/Category"); // Add the Brand model import

class Model {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields) => {
      if (!err) {
        const parsedData = JSON.parse(fields.data);
        console.log(parsedData);
        const errors = [];
        const d = new Date();
        let currentYear = d.getFullYear();
        if (parsedData.brands.trim().length === 0) {
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
        if (parsedData.body.trim().length === 0) {
          errors.push({ msg: "car body is required" });
        }
        if (parsedData.engine.trim().length === 0) {
          errors.push({ msg: "car engine is required" });
        }
        if (parsedData.power.trim().length === 0) {
          errors.push({ msg: "car power is required" });
        }
        if (errors.length === 0) {
          try {
            const brand = await Brand.findOne({ name: parsedData.brands });
            if (!brand) {
              return res
                .status(400)
                .json({ errors: [{ msg: "Invalid car brand" }] });
            }

            const response = await carModelSchema.create({
              carBrandId: brand._id, // Use the _id of the brand
              carModel: parsedData.model,
              year: parsedData.year,
              carBody: parsedData.body,
              carEngine: parsedData.engine,
              enginePower: parsedData.power,
            });
            return res
              .status(201)
              .json({ msg: "Car model has been created", response });
          } catch (error) {
            return res.status(500).json(error);
          }
        } else {
          return res.status(400).json({ errors });
        }
      }
    });
  }
}

module.exports = new Model();
