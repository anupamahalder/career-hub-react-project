
const Banner = () => {
    return (
        <div className="md:flex md:justify-around md:gap-4 px-10 bg-gray-300">
            <div className="flex-1 flex justify-center items-center py-10">
                <div className="px-12">
                    <h2 className="text-4xl md:text-6xl font-bold md:w-[450px]">One Step Closer
                     To Your <span className="text-blue-600">Dream Job</span></h2>
                    <p className="my-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="bg-blue-600 py-2 px-3 mb-5 rounded-lg text-white">Get Started</button>
                </div>
            </div>
            <div className="flex-1">
                <img src="/public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;