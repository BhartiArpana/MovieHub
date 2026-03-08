import { Children, createContext, useState } from "react";

export const UserAuthContext = createContext()
export const UserAuthProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [user,setUser]= useState(null)

    return(
        <UserAuthContext.Provider value={{loading,setLoading,user,setUser}}>
            {children}
        </UserAuthContext.Provider>
    )
}