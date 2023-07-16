const mongoose = require("mongoose")
const url = ("mongodb+srv://aayushsachdev91:qwerty321@food.jn6ogyu.mongodb.net/")

async function connectDB(){
    console.log("Start")
    await mongoose.connect(url)
    console.log("Done")
}

module.exports={connectDB}