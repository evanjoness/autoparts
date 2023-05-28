const formidable = require('formidable');
class Model {
    async create(req, res){
        // Your implementation for the create method
        const form = formidable({ multiples: true });
        form.parse(req,(err, fields)=>{
            if(!err){
                console.log("fields: ", fields);
            }
        })
    }
}

module.exports = Model;
