const express= require("express")
const jwt=require("jsonwebtoken")
const bcrypt= require("bcrypt")
const { userModel } = require("../models/user.model")




const userRouter= express.Router()

//! singup

userRouter.post("/signup",async(req,res)=>{
    try{
bcrypt.hash(req.body.password,5,async(err,hash)=>{
    if(err){
        throw err
    }
    else if(hash){
        req.body.password=hash

        let newUser= new userModel(req.body)
        await newUser.save()

        res.send("User has been registered")
    }
})
    }
    catch{
res.send("Can not register the user")
    }
})


//!login 

userRouter.post("/login",async(req,res)=>{
    let email= req.body.email
    try{
let user= await userModel.find({email})
if(user.length){
    bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
   
        if(result){
            const token= jwt.sign({user:user[0]._id},"kanban")
            res.send({"token":token})
        }
        if(err){
            throw err
        }
    })
}
else {
    res.send("Please enter correct credentials")
}
    }
    catch{
res.send("Can not Login")
    }
})

module.exports={
userRouter
}