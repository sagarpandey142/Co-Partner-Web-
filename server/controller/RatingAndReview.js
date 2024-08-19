
const Profile = require("../Models/Profile");
const RatingAndReview=require("../Models/RatingAndReview")

exports.createRating=async(req,res)=>{
    try{
          //data fetch
     const {Email,rating,review} = req.body;
     const User_Profile=await Profile.findOne({Email});
  

        const alreadyReviewed=await RatingAndReview.findOne({
             User_Profile:User_Profile._id,
        })
        if(alreadyReviewed){
            return res.status(400).json({
                success:false,
                message:"Course is Already Reviewed By The User "
            })
        }

        const createRaReview=await RatingAndReview.create({
            User_Profile:User_Profile._id,
            rating,
            review,
        })
        
      return  res.status(200).json({
            success:true,
            message:"Rating Submitted SuccessFully",
            createRaReview,
        })

       
    } catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


exports.getAllRating=async(req,res)=>{
   
    try{
        const allRating=await RatingAndReview.find({})
                                              .sort({rating:"desc"})
                                              .populate({
                                                    path:"User_Profile"
                                              })
                                              .exec();
                                        
                                             return res.status(200).json({
                                                success:true,
                                                message:"All Rating Fetched SuccessFully",
                                                data:allRating,
                                             })
                                              
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.CheckUserRating=async(req,res)=>{
     try{
        const {Email}=req.body;
        const Profile_Data=await Profile.findOne({Email});
        const alreadyReviewed=await RatingAndReview.findOne({
            User_Profile:Profile_Data._id,
       })
     
       if(alreadyReviewed){
           return res.status(200).json({
               success:false,
               message:"Course is Already Reviewed By The User "
           })
       }

       return res.status(200).json({
        success:true,
        message:"User Has Not Created Rating yet",
     })
     } catch(error){
        console.log("error",error)
        return res.status(500).json({
            success:false,
            message:error.message,
        })
     }
}