const express=require('express');
const notemodel=require("./models/note.model")

const app=express();

app.use(express.json())


app.post("/notes",async(req,res)=>{
    const data=req.body;
   await  notemodel.create({
        title:data.title,
        description:data.description

    })
    res.status(201).json({
        message:"Note created"
    })


})


app.get("/notes",async(req,res)=>{

    const notes=await notemodel.find()
//     // const notes=await notemodel.findOne({
//       title:"test_title"-->it is going to find one note  it will not going to give everything-->it is going to return object or null it is never going to return an array

// we can also provide condition like
// consnotes=notemodel.find({
//     title:"test-title"
// })

// })




    res.status(200).json({
        message:"Notes fetched succeessfully",
        notes:notes

    })
})



app.delete("/notes/:id",async(req,res)=>{
    const id =req.params.id;
    notemodel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note deletetd Successfully"
    })


})

app.patch("/notes/:id",async(req,res)=>{

    const id=req.params.id;
    const description=req.body.description;



   await  notemodel.findOneAndUpdate({
        _id:id
    },{
        description:description
    })


    res.status(200).json({
        message:"Note updated successfully"
    })
})

module.exports=app