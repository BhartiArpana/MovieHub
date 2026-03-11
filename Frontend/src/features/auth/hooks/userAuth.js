import {UserAuthContext} from '../userAuth.context.jsx'
import {userLogin,userRegister,getMe} from '../services/useAuth.api'
import { useContext,useState } from 'react'
import { useEffect } from 'react'


export const userAuth=()=>{
    const context = useContext(UserAuthContext)
    const {loading,setLoading,user,setUser}=context
    

    const handleUserRegister=async(name,email,password)=>{
         setLoading(true)
         const data = await userRegister(name,email,password)
         setUser(data.user)
         setLoading(false)
    }

    const handleUserLogin = async(email,password)=>{
        setLoading(true)
        const data = await userLogin(email,password)
        setUser(data.user)
        setLoading(false)

    }

    const handleGetMe= async()=>{
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
        return data
    }

  

    return {loading,user,handleUserRegister,handleUserLogin,handleGetMe}
}