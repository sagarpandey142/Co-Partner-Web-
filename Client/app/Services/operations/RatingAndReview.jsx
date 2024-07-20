import axios from 'axios'
import { RatingAndReviewApi } from '../Api';


export const CheckUserRating = async(Email)=>{
    try{
    const response=await axios.post(RatingAndReviewApi.CheckSpecificUserRating,{Email});
    return response;
    } catch(error){
        console.log("error",error)
    }
}

export const CreateRating=async(Email,rating,review)=>{

        try{
            const response=await axios.post(RatingAndReviewApi.CreateRating,{Email,rating,review});
            return response
        } catch(error){
             console.log("error",error)
        }
}

export const FetchAllRating=async()=>{
      try{
          const response=await axios.get(RatingAndReviewApi.getAllRating,{});
          return response
      } catch(error){
           console.log("error",error)
      }
}

