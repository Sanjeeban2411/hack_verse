const mongoose =  require("mongoose")
require("../db")

const transSchema = new mongoose.Schema({
    fromAddress:{type:String},
    toAddress:{type:String},
    value:{type:String},
    valueWithDecimal:{type:String}
},
{timestamps:true})

const Tran_details = mongoose.model('Transaction_details',transSchema)
module.exports = Tran_details