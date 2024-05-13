
const AssignmentCard = ({ assignment }) => {
    const { img, name, description, marks, option } = assignment
    return (

        <div className="font-bcd">
            <div className="w-[400px] cursor-pointer   lg:w-auto h-[500px] text-black mx-auto space-y-6 rounded-2xl bg-indigo-100   px-6 py-4 shadow-2xl ">
                {/* Card Image */}
                <img width={350} height={190} className=" h-[190px] w-[350px] rounded-2xl bg-gray-400" src={img} alt="card navigate ui" />
                {/* Card Heading */}
                <div>

                </div>
                <div className="space-y-2 h-[180px]">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="flex  justify-between">
                        <h2 className="font-medium  sm:text-lg md:text-xl ">{name}</h2>
                        <h2 className="font-bold rounded-lg p-1 bg-indigo-500">Marks : {marks}</h2>
                    </div>
                    <h2 className="font-normal  text-sm  ">{description}</h2>
                </div>
                {/* Price and action button */}
                <div className="mt-5  flex items-center justify-between">
                    <h2 className="font-medium  md:text-xl ">Difficulty : {option}</h2>

                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;