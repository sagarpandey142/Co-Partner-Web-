import axios from 'axios'
// import { Profile } from '../Api'
const { SignupRoute } = require("../Api")


interface SignupData {
     name: string,
    email: string,
    professional_role: string,
    github_link: string,
    linkedin_link: string,
    tech_stack: string,
    user_bio: string,
    country: string
  }
  interface TransformedSignupData {
    Full_Name: string;
    Tech: string;
    Email: string;
    GithubLink: string;
    LinkedinLink: string;
    proffesional_Role: string;
    user_Desc: string;
    country: string
  }

  const transformSignupData = (data: SignupData): TransformedSignupData => ({
    Full_Name: data.name,
    Tech: data.tech_stack,
    Email: data.email,
    GithubLink: data.github_link,
    LinkedinLink: data.linkedin_link,
    proffesional_Role: data.professional_role,
    user_Desc: data.user_bio,
    country: data.country
});

  export const signupHandler = async (data: SignupData) => {
    console.log("hii");
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


