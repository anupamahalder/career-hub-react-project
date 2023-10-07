import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";

const JobDetails = () => {
    // get all the jobs 
    const jobs = useLoaderData();
    // get id using useParams hook 
    const {id} = useParams();
    // console.log('id ',id);
    // get the one job by id using find method 
    const job = jobs.find(job => job.id == id);
    // destructure each property 
    const {job_description,job_responsibility,educational_requirements,experiences,salary,} = job;
    // console.log(job);
    return (
        <div>
            <div className="bg-purple-200 relative h-[250px] -mt-10 -z-10">
                <img className="absolute left bottom-0"
                 src="/public/images/bg1.png" alt="" />
                <img className="absolute right-0 top"
                 src="/public/images/bg2.png" alt="" />
                 <div className="flex justify-center items-center absolute w-full top-32 mx-auto">
                    <h1 className="text-4xl font-bold">Job Details</h1>                    
                 </div>
            </div>
            <div className="grid md:grid-cols-4 mx-auto gap-4 bg-gray-100">
                <div className="md:col-span-3 p-6 my-6 mx-2">
                    <h1 className="my-4"><span className="font-bold text-black text-xl">Job Description: </span><span className="text-gray-600">{job_description}</span></h1>
                    <h1 className="my-4"><span className="font-bold text-black text-xl">Job Responsibility:</span><span className="text-gray-600">{job_responsibility}</span></h1>
                    <h1 className="font-bold text-black text-xl">Educational Requirements:</h1>
                    <p className="text-gray-600 mb-4">{educational_requirements}</p>
                    <h1 className="font-bold text-black text-xl">Experiences:</h1>
                    <p className="text-gray-600">{experiences}</p>
                </div>
                <div className=" ">
                    <div className="bg-purple-300 p-6 rounded-lg mt-10 mx-2 ">
                        <h1 className="text-black text-xl font-semibold text-center border-b-2 border-b-gray-500">Job Details</h1> 
                        

                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 w-full text-white py-2 px-3 rounded-lg my-4 mx-2">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;