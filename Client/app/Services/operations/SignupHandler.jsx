import axios from 'axios'
// import { Profile } from '../Api'
const { SignupRoute } = require("../Api")


  export const signupHandler = async (data) => {

    try {
      const transformedData = transformSignupData(data);
      const response = await axios.post(SignupRoute.signup, transformedData);
      console.log("response", response);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

export const GetUserDetail=async(email)=>{
    try{
       const response=await axios.post(Profile.profileInfo,{Email:email});
       return response
    } catch(error){
        console.log("error",error)
    }
}


