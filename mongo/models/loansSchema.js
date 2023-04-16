const mongoose =  require("mongoose")
require("../db")

const loansSchema = new mongoose.Schema({
    reciever:{type:String},
    reciever_id:{
        type: mongoose.Schema.Types.ObjectId , 
        ref: "users"
    },
    occupation:{type:String},
    product_name:{type:String},
    product_price:{type:String},
    purchaser_gst:{type:String},
    purchaser_wallet:{type:String},
    approval:{type:Boolean},
    tenure:{type:String},
    issueing_date:{type:String}
})

const Loan_details = mongoose.model('Loan_details',loansSchema)
module.exports = Loan_details