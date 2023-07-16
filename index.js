const express = require("express")
const app = express()
const cors = require("cors")
const { connectDB } = require("./Database/Connection")
const { addMain } = require("./Database/Models")
const { route } = require("./Routes/Routes")

app.use(cors())
app.use(express.json())
app.use("/",route)

const data =[1,2,3,5]

app.get("/home",(req,res)=>{
    res.send(data)
})

app.listen(9000,()=>{
    connectDB()
    console.log("on9000")
    // addMain()
})