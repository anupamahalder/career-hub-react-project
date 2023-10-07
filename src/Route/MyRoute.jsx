import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";
import JobDetails from "../components/JobDetails/JobDetails";

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
                element: <AppliedJobs></AppliedJobs>
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
            }
        ]
    }
])

export default MyRoute;