const mongoose= require("mongoose")

const subtaskSchema= mongoose.Schema({
    title : String,
	isCompleted : Boolean
})
const taskSchema= mongoose.Schema({

    title : String,
	description : String,
	status :String, 
    subtask : [{ type: Object, ref: 'Subtask'}]
})

const boardSchema= mongoose.Schema({

    name:String, 
    tasks:[{type:Object, ref: 'Task'}]
})

var Task= mongoose.model("Task", taskSchema)
var Subtask=mongoose.model("Subtask",subtaskSchema)

const boardModel=mongoose.model("board",boardSchema)

module.exports={
    boardModel
}