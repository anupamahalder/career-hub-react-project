import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";
import JobDetails from "../components/JobDetails/JobDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../Hook/AuthProvider/PrivateRoute";
import Jobs from "../Pages/Jobs/Jobs";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <MainLayout><div>Error is occured</div></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appliedjobs',
                element: <PrivateRoute>
                    <AppliedJobs></AppliedJobs>
                </PrivateRoute>
            },
            {
                path: '/jobs',
                element: <PrivateRoute>
                    <Jobs></Jobs>
                </PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                // making dynamic route for each job by getting its id 
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: () => fetch('/jobs.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default MyRoute;