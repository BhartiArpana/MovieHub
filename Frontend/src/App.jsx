import { RouterProvider } from "react-router-dom"
import { router } from "./features/App.router"
import './features/shared/global.scss'
import {UserAuthProvider} from './features/auth/userAuth.context.jsx'
import {MovieProvider} from './features/Movie/movie.context.jsx'

function App() {
  

  return (
    <UserAuthProvider>
      <MovieProvider>
      <RouterProvider router={router} />
      </MovieProvider>
    </UserAuthProvider>
   
  )
}

export default App
