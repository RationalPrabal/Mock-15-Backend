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

    //!get boards


boardRouter.get("/",async(req,res)=>{
    try{

        let Boards= await boardModel.find()
     
    res.send(Boards)
    }
    catch{
        res.send("can not get the Boards")
    }
    })

    //! patch board

    boardRouter.patch("/update/:id",async(req,res)=>{
        const {id}= req.params
        try{
let board= await boardModel.findById(id)
board.tasks.push(req.body)
    await boardModel.findByIdAndUpdate(id,board)
    
        res.send("Board has been updated")
        }
        catch{
            res.send("can not update the Board")
        }
        })

    module.exports={
        boardRouter
    }