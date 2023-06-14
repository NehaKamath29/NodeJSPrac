const express=require("express");
const app=express()
const path=require("path")
const collection=require("./mongodb")
app.use(express.json())

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.use(express.urlencoded({extended:false}))
app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.text,
        password:req.body.password,
        phno:req.body.number,
        email:req.body.email
    }
})

await collection.insertMany([data])

res.render("login")

app.listen(3000,()=>{
    console.log("port connected");
})