const express = require('express')
const axios = require('axios')

const Loans = require('../mongo/models/loansSchema')

const router = new express.Router()

router.get("/getAllLoans", async(req,res)=>{
    try {
        const userId = req.body.userId
        const loans = await Loans.find({reciever_id:userId})
        res.send(loans)
    } catch (error) {
        res.send(error)
    }
})

router.get("/getDashboardLoans", async(req,res)=>{
    try {
        const userId = req.body.userId
        const loans = await Loans.find({reciever_id:userId})
        let newArr = []
        for(let i=0; i<5;i++){
            newArr.push(loans[i])
        }
        res.send(newArr)
    } catch (error) {
        res.send(error)
    }
})

router.post("/addLoan", async(req,res)=>{

})

module.exports = router
