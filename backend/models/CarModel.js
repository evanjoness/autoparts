const mongoose = require("mongoose");
const carModelSchema = mongoose.Schema({
    carBrand:{
        required:true,
        type:String
    },
    carModel:{
        required:true,
        type:String
    },
    year:{
        required:true,
        type:Number
    },
    carBody:{
        required:true,
        type:String
    },
    carEngine:{
        required:true,
        type:String
    },
    enginePower:{
        required:true,
        type:String
    }
},{timestamps:true})
module.exports = mongoose.model("carModel", carModelSchema)