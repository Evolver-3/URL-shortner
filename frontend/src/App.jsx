import { RouterProvider } from "react-router-dom";
import {router} from './app.routes.jsx'
import { UrlProvider } from "./assets/Url/url.context.jsx";


const App = () => {
  return (
    
    <UrlProvider>
      <RouterProvider router={router}/>
    </UrlProvider>
  )
}

export default App