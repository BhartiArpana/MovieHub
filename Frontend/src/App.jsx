import { RouterProvider } from "react-router-dom"
import { router } from "./features/App.router"
import './features/shared/global.scss'
import {UserAuthProvider} from './features/auth/userAuth.context.jsx'

function App() {
  

  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
   
  )
}

export default App
