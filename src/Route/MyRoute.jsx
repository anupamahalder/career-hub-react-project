import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home/Home";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error is occured</div>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default MyRoute;