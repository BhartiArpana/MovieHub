import React from 'react'
import { Children } from 'react'
import {userAuth} from '../hooks/userAuth'
import {Navigate} from 'react-router-dom'

const Protected = ({children}) => {
   const {user,loading} = userAuth()

   if(loading){
    return <h1>Loading...</h1>
   }

   if(!loading && !user){
    return <Navigate to={'/login'} />
   }
  return children
}

export default Protected