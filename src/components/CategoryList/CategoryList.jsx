
const CategoryList = () => {
    return (
        <div className="mb-10">
            <h2 className="text-4xl text-center font-semibold mt-10">Job Category List</h2>
            <p className="my-4 text-center text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
                    <div className="w-[200px] h-[200px] rounded-lg bg-purple-100">
                        <img className="my-8 mx-auto" src="/public/icons/accounts.png" alt="" />
                        <h2 className="text-xl font-bold text-center text-black">Account & Finance</h2>
                        <p className="text-gray-600 text-center my-2">300+ Jobs Available</p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-lg bg-purple-100">
                        <img className="my-8 mx-auto" src="/public/icons/creative.png" alt="" />
                        <h2 className="text-xl font-bold text-center text-black">Creative Design</h2>
                        <p className="text-gray-600 text-center my-2">100+ Jobs Available</p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-lg bg-purple-100">
                        <img className="my-8 mx-auto" src="/public/icons/marketing.png" alt="" />
                        <h2 className="text-xl font-bold text-center text-black">Marketing & Sales</h2>
                        <p className="text-gray-600 text-center my-2">200+ Jobs Available</p>
                    </div>
                    <div className="w-[200px] h-[200px] rounded-lg bg-purple-100">
                        <img className="my-8 mx-auto" src="/public/icons/chip.png" alt="" />
                        <h2 className="text-xl font-bold text-center text-black">Engineering Job</h2>
                        <p className="text-gray-600 text-center my-2">70+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;