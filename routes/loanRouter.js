const express = require('express')
const axios = require('axios')

const Loans = require('../mongo/models/loansSchema')

const router = new express.Router()

const OCR_uri = 'http://c5db-157-51-44-161.ngrok.io/extract'


const multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: Storage })




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
        console.log(userId)
        const loans = await Loans.find({reciever_id:userId}).limit(5)
        res.send(loans)
    } catch (error) {
        res.send(error)
    }
})




router.post("/add-loan", upload.any(), async(req,res)=>{
    let file
    if (!req.files) return res.status(500).json({msg:"Please add document to it"})
   

    console.log(req.body)
    const { reciever ,occupation ,product_name ,product_price ,purchaser_gst ,purchaser_wallet } = req.body

    // await axios.post('http://d178-2409-4072-783-6cc5-6c0d-830c-4d-1af9.ngrok.io/extract', {pdf_file:file} , {
    //     headers: { 
    //     'Content-Type': 'multipart/form-data',
    //   }
    // }).then(
    //     (response) => {
    //         return res.send(response.data)
    //     },
    //     (error) => {
    //         console.log(error)
    //         res.send(error)
    //     }
    // );

    const loanData = new Loans({
        reciever ,occupation ,product_name ,product_price ,purchaser_gst ,purchaser_wallet 
    })

    loanData.save()

    res.send(loanData)

})

module.exports = router
