import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Favorites from "../pages/favorites/Favorites";
import Carts from "../pages/cart/Carts";
import Login from "../pages/login/Login";



const router = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('phones.json'),
            },
            {
                path:'/favorites/:id',
                element:<Favorites></Favorites>,
                loader:()=>fetch('phones.json'),
            },
            {
                path:'/carts',
                element:<Carts></Carts>,
                loader:()=>fetch('phones.json'),
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
        ]
    }
])

export default router