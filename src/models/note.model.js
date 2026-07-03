const mongoose=require("mongoose")


const noteSchema=new mongoose.Schema({

    title:String,
    description:String,




})


//models is bascically used to perform crud operations
const noteModel= mongoose.model("note",noteSchema)


module.exports=noteModel
