const express = require("express")
const app = express()
const bcrpyt = require("bcrypt")
const saltrounds = 10
const secretkey = "ecommercesecret"
const jwt = require("jsonwebtoken")
const { signupModel, recipeModel, reviewModel, qustionModel, saverecipeModel } = require("../Database/Models")


async function signUp(req, res) {
    const signUpData = req.body
    console.log(signUpData)
    const hashedpass = bcrpyt.hashSync(signUpData.data.password, saltrounds)
    console.log(hashedpass)
    const response = await signupModel.find()
    console.log(response)
    const newObj = {
        email: signUpData.data.email,
        username: signUpData.data.username,
        password: hashedpass
    }
    const matched = await signupModel.find({ email: signUpData.data.email })
    if (matched.length > 0) {
        console.log("0")
        res.send({ message: "Email Already Exists" })
    }
    else {
        await signupModel.create(newObj)
        console.log("1")
        res.send({ message: "User Registered" })
    }
}

const verify = (req, res, next) => {
    console.log("wibiewfb")
    const rewToken = req.header("Authorization")
    console.log(rewToken)
    const secretkey = "qwerty321"
    const vertoken = jwt.verify(rewToken, secretkey)
    next()
}

async function logIn(req, res) {
    const loginData = req.body
    console.log(req.body)
    const response = await signupModel.find({ email: loginData.data.email })
    console.log(response)
    const validate = bcrpyt.compareSync(loginData.data.password, response[0].password)
    console.log(validate)
    if (validate == true) {
        const token = jwt.sign(loginData, secretkey,{expiresIn:"2h"})
        let resp1 = {
            "msg": "User has logged in successfully",
            "token": token,
            "userID": response[0]._id //6492b71d41deda9f89a4c740
        }
        res.send(resp1)
    }
    else {
        res.send("invalid password")
    }
}

async function addRecipe(req, res) {
    const data = req.body
    console.log(data)
    await recipeModel.insertMany(data)
    const response = await recipeModel.find()
    res.send("Recipe Added Successfully")
}

async function addReview(req, res) {
    const data = req.body
    const response = await signupModel.find({ _id: data.data._id })
    const email = response[0].email
    const username = email.split("@")[0]
    const review = data.data.review
    const title = data.data.RecipeId
    const ecipename = data.data.recipeName
    console.log("final data", review, username, title)
    const newObj = {
        RecipeId: title,
        RecipeName:ecipename,
        UserName: username,
        Review: review
    }
    console.log("final obj", newObj)
    await reviewModel.insertMany(newObj)
    console.log("review added")
}

async function getReview(req, res) {
    const Title = req.params
    console.log(Title.title)
    const response = await reviewModel.find({ RecipeId: Title.title })
    res.send(response)
}

async function addQuestion(req, res) {
    const data = req.body
    console.log(data)
    const response = await signupModel.find({ _id: data.data._id })
    const email = response[0].email
    const username = email.split("@")[0]
    const review = data.data.review
    const title = data.data.RecipeId
    console.log("final data", review, username, title)
    const newObj = {
        RecipeId: title,
        UserName: username,
        Question: review
    }
    console.log("final obj", newObj)
    await qustionModel.insertMany(newObj)
    res.send("question added")
}

async function getQues(req, res) {
    const Title = req.params
    console.log(Title.title)
    const response = await qustionModel.find({ RecipeId: Title.title })
    res.send(response)
}

async function saveRecipe(req, res) {
    const details = req.body.data.Recipe
    const Userid = req.body.data.id
    console.log(Userid)
    const Image = details.image
    const Name = details.label
    const AuthorImage = "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif"
    const AuthorName = "Author W."
    const newObj = {
        userid: Userid,
        image: Image,
        name: Name,
        authorImage: AuthorImage,
        authorName: AuthorName
    }
    await saverecipeModel.insertMany(newObj)
    res.send("recipeadded")
}

async function getSavedRecipes(req,res){
    const userid = req.params.id
    console.log(userid)
    const response = await saverecipeModel.find({userid:userid})
    res.send(response)
}

async function getAllReciews(req,res){
    const response = await reviewModel.find()
    res.send(response)
}

async function getUserDetails(req,res){
    const userid = req.params.userid
    console.log(userid)
    const response = await signupModel.find({_id:userid})
    const email = response[0].email
    const username = email.split("@")[0]
    res.send(username)
}




module.exports = { signUp, logIn, verify, addReview, addRecipe, getReview, addQuestion, getQues, saveRecipe, getSavedRecipes, getAllReciews,getUserDetails}

