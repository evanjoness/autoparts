const mongoose = require("mongoose");
const brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})
<<<<<<< HEAD:backend/models/Brand.js
module.exports =  mongoose.model("brands", brandSchema)
=======
module.exports =  mongoose.model("brands", categorySchema)
>>>>>>> main:backend/models/Category.js
