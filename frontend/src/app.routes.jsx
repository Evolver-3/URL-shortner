import { createBrowserRouter } from "react-router-dom";
import Home from "./assets/Url/pages/FrontPage/Home";
import Desc from './assets/Url/pages/AllUrl/Desc'
import Contact from './assets/Url/pages/Contactpage/Contact'

export const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/getAll",
      element:<Desc/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/contact",
      element:<Contact/>,
      errorElement:<ErrorPage/>
    }
  ]
)

function ErrorPage(){
  return(
    <div>
      <h1>404 - Page Not Found</h1>
      <p> The page you're loogin for doesn't exist.</p>
      
    </div>
  )
}