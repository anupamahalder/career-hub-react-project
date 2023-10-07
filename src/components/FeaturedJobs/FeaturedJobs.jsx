import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
    // declare a state to hold data 
    const [jobs, setJobs] = useState([]);
    // loading data and when component will be loaded then data shoulb be loaded so we will use arrow function 
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[]); 
    
    return (
        <div className="my-20">
            <div className="text-center my-10">
                <h2 className="text-4xl text-center font-semibold mt-10">Featured Jobs: {jobs.length}</h2>
                <p className="my-4 text-center text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* list of featured jobs  */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-6">
                {
                    jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;