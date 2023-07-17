const mongoose = require("mongoose")
const Schema = mongoose.Schema

const main = new Schema({
    title: String,
    description: String,
    category: String,
    subCategory: String
})

const mainModel = mongoose.model("main", main)

const recipe = new Schema({
    Name:String,
    Description:String,
    Categories:String,
    PrepTime:Number,
    CookTime:Number,
    Serves:Number,
    Ingredients:String,
    Directions:String,
    Image:String,
})

const recipeModel = mongoose.model("recipe",recipe)

async function addMain() {
        await mainModel.insertMany([ {
            "title": "50 EASY LUNCH IDEAS FOR THE WHOLE FAMILY",
            "description": "Whether you're packing lunch for the kiddos or looking for something quick to make the whole family, we've got you covered with these fun, easy meals. The best part? They come together in less than 20 minutes with minimal ingredients.",
            "category": "Lunch Recipes",
            "subCategory": "KIDS & FAMILY"
        },
        {
            "title": "TOP 100 APPETIZER RECIPES",
            "description": "When we say the options are endless, we mean it! Let's go from good to great by entertaining the right way — with food that everyone loves! Whether you've got picky eaters or adventurous palates, there is something to munch on when you follow these recipes.",
            "category": "Appetizers & Snack Recipes ",
            "subCategory": "DINNER PARTY RECIPES"
        },
        {
            "title": "50 EASY LUNCH IDEAS FOR THE WHOLE FAMILY",
            "description": "Whether you're packing lunch for the kiddos or looking for something quick to make the whole family, we've got you covered with these fun, easy meals. The best part? They come together in less than 20 minutes with minimal ingredients.",
            "category": "Lunch Recipes",
            "subCategory": "KIDS & FAMILY"
        },
        {
            "title": "56 GRILLED CHICKEN RECIPES",
            "description": "Why grill it plain when the flavor options for BBQ chicken are endless? These simple glaze, spice rub and marinade recipes are perfect for grilling up the best barbecued chicken thighs, wings, skewers, breasts and beyond. And don't forget to make a chicken salad with the leftovers!",
            "category": "GRILLED CHICKEN",
            "subCategory": "SUMMER GRILLING"
        },
     ])
    console.log("Data Adedd")
}

const signupSchema = new Schema({
    email:String,
    username:String,
    password:String
  })
  
  const signupModel = mongoose.model('signUp',signupSchema)

const reviewSchema = new Schema({
    RecipeId:String,
    RecipeName:String,
    UserName: String,
    Review: String
})

const reviewModel = mongoose.model('reviews',reviewSchema)

const questionSchema = new Schema({
    RecipeId:String,
    UserName: String,
    Question: String
})

const qustionModel = mongoose.model('questions',questionSchema)

const saverecipeSchema = new Schema({
    userid: Schema.ObjectId,
    image : String,
    name : String,
    authorImage : String,
    authorName : String
})

const saverecipeModel = mongoose.model('saved recipes',saverecipeSchema)

const replySchema = new Schema({
    reviewid:Schema.ObjectId,
    name:String,
    reply:String
})

const replyModel = mongoose.model("replies",replySchema)
module.exports = { mainModel, addMain , signupModel,recipeModel,reviewModel,qustionModel,saverecipeModel,replyModel}


