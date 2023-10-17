import { useLoaderData, useParams } from "react-router-dom";
import {AiOutlineDollar,AiOutlineProfile,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai';
import {SlLocationPin} from 'react-icons/sl';

const JobDetails = () => {
    // get all the jobs 
    const jobs = useLoaderData();
    // get id using useParams hook 
    const {id} = useParams();
    // console.log('id ',id);
    // get the one job by id using find method 
    const job = jobs.find(job => job.id == id);
    // destructure each property 
    const {job_description,job_responsibility,educational_requirements,experiences,salary, job_title, contact_information} = job;
    // destructure from contact_information 
    const {phone, email, address} = contact_information;
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
            <div className="grid md:grid-cols-6 mx-auto gap-4 bg-gray-100">
                <div className="md:col-span-4 p-6 my-6 mx-2">
                    <h1 className="my-4"><span className="font-bold text-black text-xl">Job Description: </span><span className="text-gray-600">{job_description}</span></h1>
                    <h1 className="my-4"><span className="font-bold text-black text-xl">Job Responsibility:</span><span className="text-gray-600">{job_responsibility}</span></h1>
                    <h1 className="font-bold text-black text-xl">Educational Requirements:</h1>
                    <p className="text-gray-600 mb-4">{educational_requirements}</p>
                    <h1 className="font-bold text-black text-xl">Experiences:</h1>
                    <p className="text-gray-600">{experiences}</p>
                </div>
                <div className="md:col-span-2 ">
                    <div className="bg-[#d4c7f5] p-6 rounded-lg mt-10 mx-2 ">
                        {/* job details  */}
                        <h1 className="text-black text-xl font-semibold text-center border-b-2 border-b-gray-500">Job Details</h1> 
                        <p className="flex items-center gap-1 py-2"><AiOutlineDollar className="text-blue-800 text-xl"></AiOutlineDollar><span className="text-black font-semibold mt-1">Salary: </span> <span className="text-gray-600 text-[16px]">
                            {salary} (Per Month) 
                            </span></p>
                        <p className="flex items-center gap-1 py-2"><AiOutlineProfile className="text-blue-800 text-2xl mb-1"></AiOutlineProfile><span className="text-black font-semibold">Job Title: </span> <span className="text-gray-600 text-[16px]">
                            {job_title} 
                            </span></p>
                        {/* contact information  */}
                        <h1 className="mt-6 text-black text-xl font-semibold text-center border-b-2 border-b-gray-500">Contact Information</h1> 
                        <p className="flex items-center gap-1 py-2"><AiOutlinePhone className="text-blue-800 text-xl"></AiOutlinePhone><span className="text-black font-semibold mt-1">Phone: </span> <span className="text-gray-600 text-[16px]">
                            {phone} 
                            </span></p>
                        <p className="flex items-center gap-1 py-2"><AiOutlineMail className="text-blue-800 text-xl"></AiOutlineMail><span className="text-black font-semibold mt-1">Email: </span> <span className="text-gray-600 text-[16px]">
                            {email}
                            </span></p>
                        <p className="flex items-center gap-1 py-2"><SlLocationPin className="text-blue-800 text-2xl mb-1"></SlLocationPin><span className="text-black font-semibold">Address: </span> <span className="text-gray-600 text-[16px]">
                            {address} 
                            </span></p>

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