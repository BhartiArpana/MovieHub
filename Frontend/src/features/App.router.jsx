import {createBrowserRouter} from 'react-router-dom'
import SignUp from './auth/pages/SignUp'
import Login from './auth/pages/Login'
import ThemeToggle from './darkLightTheme/pages/ThemeToggle'

export const router=createBrowserRouter([
    {
        path:'/signUp',
        element:<SignUp />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/',
        element:<ThemeToggle />
    }

])