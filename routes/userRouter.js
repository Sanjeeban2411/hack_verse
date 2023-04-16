const express = require('express')
const bcrypt = require("bcryptjs");
const User = require('../mongo/models/userSchema')

const router = new express.Router()

router.post("/signup", async (req, res)=>{
    if(req.body.password !== req.body.confirmPassword){
        return res.status(400).send("Check your password")
    }

    const check_user = await User.findOne({ user_name:req.body.user_name })
    if(check_user){
        return res.status(400).send("Username taken")
    }

    const pass = await bcrypt.hash(req.body.password, 8);

    const data = {
        first_name:req.body.first_name,
        middlle_name:req.body.middlle_name,
        last_name:req.body.last_name,
        user_name:req.body.user_name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone,
        password:pass,
        address:req.body.address,
        locality:req.body.locality,
        district:req.body.district,
        pincode:req.body.pincode,
        metamask_address:req.body.metamask_address,
    }

    const user = new User(data)
    await user.save()

    res.send(user)
})

router.post("/login", async(req,res)=>{
    const userIdentity = req.body.userIdentity
    const check_user = await User.findOne({user_name:userIdentity})
    const check_email = await User.findOne({email:userIdentity})
    const check_phone = await User.findOne({phone:userIdentity})

    if(!(check_phone || check_email || check_user)){
        return res.status(400).send("You are not registered")
    }

    const user = check_user?check_user:check_email?check_email:check_phone
    // let check_pass
    const check_pass = bcrypt.compare(req.body.password, user.password)
    // .then((res)=>check_pass = !res)
    // .catch((e)=>{
    //     console.log(e)
    // })

    if(!check_pass){
        return res.status(400).send("Wrong Credentials")
    }
    res.send(user)
})



module.exports = router