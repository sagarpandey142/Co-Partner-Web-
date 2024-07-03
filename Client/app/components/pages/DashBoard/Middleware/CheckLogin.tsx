import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'

const CheckLogin = () => {
    const {user}=useUser();

    const checkAuth=()=>{
          if(user){
             console.log("Welcome....")
          } else {
            
          }
    }
  return (
    <div>CheckLogin</div>
  )
}

export default CheckLogin