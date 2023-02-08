import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
// import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
        {
            path : '/',
            element : <Main></Main>,
            children : [
                {
                    path : '/',
                    element : <Home></Home>
                },
                {
                    path : '/shop',
                    element : <Shop></Shop>
                },
            ]

        }
])