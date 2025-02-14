import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'

type Props={
    email: string;
    password: string;
}
const LoginApi = ({email, password}:Props) => {
    const isApi= useRef(true)

    useEffect(() => {
        if(isApi.current && email && password){
            // Handle login logic here
            isApi.current=false

        }   
    },[email, password])


    const auth=async()=>{
        try{
            const response= await fetch('https://api.example.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            const data= await response.json()
            console.log(data)
        }catch(e){
            console.log(e)
    }
  return (
   <>
   </>
  )
}
return(
    <>
    </>
)
}

export default LoginApi