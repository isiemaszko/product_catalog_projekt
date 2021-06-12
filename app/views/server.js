const express=require("express")
const dotenv=require("dotenv")
const morgan =require("morgan")
const bodyparser=require("body-parser")
const path=require("path")

const app=express()

dotenv.config({path:'config.env'})
app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(8080,()=>{console.log('Server i running on http://localhost:8080')})