const express=require("express")
const router=express.Router();

// controller imoort
const {createRating,getAllRating,CheckUserRating}=require("../controller/RatingAndReview")

// mapping
router.post("/createRating",createRating);
router.get("/getRating",getAllRating);
router.post("/CheckUserRating",CheckUserRating)

//export
module.exports=router