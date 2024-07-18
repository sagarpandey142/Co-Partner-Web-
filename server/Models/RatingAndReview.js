const mongoose=require("mongoose");

const RatingAndReview=new mongoose.Schema({
   User_Profile:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Profile",
      required:true,
   },

   rating:{
    type:Number,
    required:true,
   },

   review:{
    type:String,
    required:true,
   },

})

module.exports=mongoose.model("RatingAndReview",RatingAndReview);