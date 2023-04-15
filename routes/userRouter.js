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
    const userIdentiy = req.body.userIdentiy
    const check_user = await User.findOne({user_name:userIdentiy})
    const check_email = await User.findOne({email:userIdentiy})
    const check_phone = await User.findOne({phone:userIdentiy})

    if(!(check_phone || check_email || check_user)){
        return res.status(400).send("You are not registered")
    }

    const user = check_user?check_user:check_email?check_email:check_phone
    const check_pass = await bcrypt.compare(req.body.password, user.password)
    if(!check_pass){
        return res.status(400).send("Wrong Credentials")
    }
    res.send(user)
})



module.exports = router