const mongoose = require("mongoose")
require("../db")

const kycSchema = new mongoose.Schema({
    name: { type: String },
    pan_number: { type: String },
    govID: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_details"
    },
    is_verified:{type:Number}
})

const kyc_detail_model = mongoose.model('kyc_detail', kycSchema)
module.exports = kyc_detail_model