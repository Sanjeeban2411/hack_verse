const mongoose =  require("mongoose")
require("../db")

const userSchema = new mongoose.Schema({
    first_name:{type:String},
    middlle_name:{type:String},
    last_name:{type:String},
    user_name:{
        type: String,
        unique:true
    },
    gender:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String},
    address:{type:String},
    locality:{type:String},
    district:{type:String},
    pincode:{type:String},
    credit_score:{type:String},
    metamask_address:{type:String},
    kyc_details:{
        type: mongoose.Schema.Types.ObjectId ,
        ref:"kyc"
    },
    loan_details:[{
        type: mongoose.Schema.Types.ObjectId , 
        ref:"loan"
    }]
})

const User_details = mongoose.model('User_details',userSchema)
module.exports = User_details