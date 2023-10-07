import PropTypes from 'prop-types';
import {GoLocation} from 'react-icons/go';
import {HiOutlineCurrencyDollar} from 'react-icons/hi';
import { Link } from 'react-router-dom';
const FeaturedJob = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,} = job;
    return (
        <div className='border rounded-md px-8 py-4'>
            <img className='my-4' src={logo} alt="" />
            <h2 className='text-xl font-semibold my-2'>{job_title}</h2>
            <p className='text-sm text-gray-500'>{company_name}</p>
            <div className='flex gap-4 my-4'>
                <button className='border-2 cursor-default rounded-md border-purple-600 text-purple-700 font-semibold  px-3 py-1'>{remote_or_onsite}</button>
                <button className='border-2 cursor-default rounded-md border-purple-600 text-purple-700 font-semibold  px-3 py-1'>{job_type}</button>
            </div>
            {/* location and salary  */}
            <div className='flex gap-4'>
                {/* location  */}
                <div className='flex gap-2 text-gray-600'>
                    <GoLocation className='text-xl text-gray-500'></GoLocation>
                    <h2>{location}</h2>
                </div>
                <div className='flex gap-2 text-gray-600'>
                    <HiOutlineCurrencyDollar className='text-2xl text-gray-500'></HiOutlineCurrencyDollar>
                    <h2>{salary}</h2>
                </div>
            </div>
            {/* dynamic route   */}
            <Link to={`/job/${id}`}>
            <button className='bg-blue-600 text-white py-2 px-3 rounded-lg my-4'>View Details</button></Link>
        </div>
    );
};

//adding proptypes 
FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired,
}
export default FeaturedJob;