const express = require('express')
const Transaction = require('../mongo/models/transactionSchema')

const router = new express.Router()

router.post("/webhook", async(req,res)=>{
    const {body} = req
    console.log("XXX")
    console.log("req",req)
    // if(body.confirmed){
    //     return res.status(200).json();
    // }
    // let newTransfers=[]    
    // for (trasfer of body.erc20Transfers){
    //     newTransfers.push({
    //         fromAddress: transfer.from,
    //         toAddress:transfer.to,
    //         value: transfer.value,
    //         valueWithDecimals: transfer.valueWithDecimals
    //     })
    // }

    // if(newTransfers.length>0){
    //     await Transfer.insertMany(newTransfers),
    //     connsole.log("Added new transfers to DB")
    // }

    // return res.status(200).json();
    return res.status(200).json("abc");

})

module.exports = router