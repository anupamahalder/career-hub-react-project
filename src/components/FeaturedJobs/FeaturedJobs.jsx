import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
    // declare a state to hold data 
    const [jobs, setJobs] = useState([]);
    const [btnClicked, setBtnClicked] = useState(false);
    // default length we are giving is 4 
    const [dataLength, setDataLength] = useState(4);
    // loading data and when component will be loaded then data shoulb be loaded so we will use arrow function 
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[]); 
    const handleSeeAllBtn = () =>{
        setDataLength(jobs.length);
        setBtnClicked(!btnClicked);
    }
    
    return (
        <div className="my-20">
            <div className="text-center my-10">
                <h2 className="text-4xl text-center font-semibold mt-10">Featured Jobs: {jobs.length}</h2>
                <p className="my-4 text-center text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* list of featured jobs  */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
                
            </div>
            <div className="flex justify-center my-10">
            {
                jobs.length > 4 && dataLength !== jobs.length ? <button onClick={handleSeeAllBtn}
                    className="bg-blue-600 mx-auto text-white py-2 px-3 rounded-lg my-4">See All</button>
                : ''
            }
            </div>
        </div>
    );
};

export default FeaturedJobs;