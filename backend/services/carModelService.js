const mongoose = require('mongoose');
const CarModel = mongoose.model('carModel');

const carModelService = {};

carModelService.getByBrandId = async (brandId, options = {}) => {
    try {
        let carModels = await CarModel.find({ 'carBrand.carBrandId': brandId }, null, options)
            .populate('carBrand.carBrandId');
        return carModels;
    } catch (err) {
        throw err;
    }
};

module.exports = carModelService;
