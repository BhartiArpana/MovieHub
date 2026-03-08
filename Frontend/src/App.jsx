import { RouterProvider } from "react-router-dom"
import { router } from "./features/App.router"
import './features/shared/global.scss'

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
