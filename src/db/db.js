const mongoose=require('mongoose')




async function connectdb(){
   await  mongoose.connect('mongodb+srv://Manoj:cluster0.awfoz44.mongodb.net/halley')
    console.log("db is connected")
}







module.exports=connectdb
