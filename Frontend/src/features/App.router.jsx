import {createBrowserRouter} from 'react-router-dom'
import SignUp from './auth/pages/SignUp'
import Login from './auth/pages/Login'
import ThemeToggle from './darkLightTheme/pages/ThemeToggle'
import MovieCard from './Movie/components/MovieCard'
import Navbar from './Movie/components/Navbar'
import Home from './Movie/pages/Home'

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
        element:<Home />
    }
// <ThemeToggle />
])