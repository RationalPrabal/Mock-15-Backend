const express= require("express")
const { boardModel } = require("../models/board.model")

const boardRouter= express.Router()

//!create boards


boardRouter.post("/create",async(req,res)=>{
    try{

        let newBoard= new boardModel(req.body)
        await newBoard.save()
    res.send("Board has been created")
    }
    catch{
        res.send("can not create the Board")
    }
    })

    module.exports={
        boardRouter
    }