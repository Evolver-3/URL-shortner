import { createBrowserRouter } from "react-router-dom";
import Home from "./assets/Url/pages/Home";

export const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
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