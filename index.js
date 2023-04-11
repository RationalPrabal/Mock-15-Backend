const express=require("express")
const cors= require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.route")
const { boardRouter } = require("./routes/board.route")


const app=express()

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use("/user", userRouter)
app.use("/board", boardRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch{
        console.log("can not connect to db")
    }

    console.log(`server is running at port ${process.env.PORT}`)
})