const { verify } = require("jsonwebtoken")
const { signUp, print, logIn, addRecipe, getReview, addReview, addQuestion, getQues, saveRecipe, getSavedRecipes, getAllReciews, getUserDetails } = require("../Controllers/User")

const route = require("express").Router()

route.post("/signup",signUp)
route.post("/login",logIn)
route.get("/ver",verify)
route.post("/addnewrecipe",addRecipe)
route.post("/addreview",addReview)
route.get("/getreview/:title",getReview)
route.post("/addques",addQuestion)
route.get("/getques/:title",getQues)
route.post("/saverecipe",saveRecipe)
route.get("/getsavedrecipes/:id",getSavedRecipes)
route.get("/getallreviews",getAllReciews)
route.get("/getuserdetails/:userid",getUserDetails)


module.exports={route}