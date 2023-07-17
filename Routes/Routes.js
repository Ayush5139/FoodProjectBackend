
const { signUp, print, logIn, addRecipe, getReview, addReview, addQuestion, getQues, saveRecipe, getSavedRecipes, getAllReciews, getUserDetails, verify, getReviewById, addReplies, getReplies } = require("../Controllers/User")

const route = require("express").Router()

route.post("/signup",signUp)
route.post("/login",logIn)
route.post("/addnewrecipe",addRecipe)
route.post("/addreview",addReview)
route.get("/getreview/:title",getReview)
route.post("/addques",addQuestion)
route.get("/getques/:title",getQues)
route.post("/saverecipe",saveRecipe)
route.get("/getsavedrecipes/:id",getSavedRecipes)
route.get("/getallreviews",getAllReciews)
route.get("/getuserdetails/:userid",getUserDetails)
route.get("/getonreview/:reviewid",getReviewById)
route.post("/postreplies",addReplies)
route.get("/getreplies/:reviewid",getReplies)

module.exports={route}