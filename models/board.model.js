const mongoose= require("mongoose")

const taskSchema= mongoose.Schema({

    title : String,
	description : String,
	status :String, 
})

const boardSchema= mongoose.Schema({

    name:String, 
    tasks:[{type:Object, ref: 'Task'}]
})

var Task= mongoose.model("Task", taskSchema)

const boardModel=mongoose.model("board",boardSchema)

module.exports={
    boardModel
}