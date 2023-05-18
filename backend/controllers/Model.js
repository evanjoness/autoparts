const formidable = require("formidable");
class Model {
    async create(req, res){
        const form = formidable({multiples:true});
        form.parse(req, (err, fields)=>{
            if(!err){
                const parsedData = JSON.parse(fields.data);
                const errors = [];
                const d = new Date();
                let currentYear = d.getFullYear();
                if(parsedData.model.trim().length===0){
                    errors.push({model:"car model is required"})
                }
                if(parseInt(parsedData.year)<1950 || parseInt(parsedData.year)>currentYear){
                    errors.push({year:"year can not be lower than 1950 or bigger than current"})
                }
                if(parsedData.body.trim().length===0){
                    errors.push({body:"car body is required"})
                }
                if(parsedData.engine.trim().length===0){
                    errors.push({engine:"car engine is required"})
                }
                if(parsedData.power.trim().length===0){
                    errors.push({engine:"car power is required"})
                }
                if(parsedData.brands.trim().length===0){
                    errors.push({brands:"car brand is required"})
                }
                else{
                    res.status(400).json({errors})
                }
            }
        })
    }
}
module.exports = new Model;