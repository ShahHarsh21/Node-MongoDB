const db = require('../dbconnection');

const productSchema = db.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true}
});

module.exports = db.model('product',productSchema);