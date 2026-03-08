import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

export const userRegister=async(name, email, password)=>{
     const response = await api.post('/api/auth/register',{
          name,
          email,
          password
     })
     return response.data
}

export const userLogin =async (email,password)=>{
    const response = await api.post('/api/auth/login',{
        email,
        password
    })
    return response.data
}

export const getMe=async()=>{
    const response = await api.get('/api/users/get-me')
    return response.data
}