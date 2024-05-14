import { FaPenAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GoNumber } from "react-icons/go";
import { Link, useLoaderData, useParams } from "react-router-dom";




const ViewAssignments = () => {

    const assignment = useLoaderData()
    const { id } = useParams()
    const assignments = assignment.find(assignment => assignment._id === id)
    console.log(assignments)
    return (
        <div>
            <div className="card container bg-gray-100 p-8 lg:mx-auto  ">
                <div className="mx-2 gap-10 flex-0">
                    <img className="w-[700px] items-center justify-center container mx-auto rounded-lg" src={assignments.img} alt="Album" />
                    <div className="card-body  rounded-xl">


                        <div className="flex justify-between">
                            <h2 className="card-title">{assignments.name}</h2>
                            <div className="flex text-black w-36 p-1 rounded-lg bg-red-500   gap-3 items-center">
                                <GoNumber className="text-2xl " />
                                <p className="text-xl  ">  <span className="font-medium ">Marks:</span> {assignments.marks}</p>
                            </div>
                        </div>
                       <div className="flex gap-2 items-center">
                       <FaArrowRight className="lg:mb-6 text-2xl"/><p className="text-xl "><span className="font-medium">Description:</span> {assignments.description}</p>
                       </div>
                       
                        <div className="flex items-center gap-2">
                        <FaArrowRight className="text-xl" /><p className="text-xl "><span className="font-medium">Difficulty:</span> {assignments.option}</p>
                        </div>
                       <div className="flex items-center gap-2">
                       <FaArrowRight className="text-xl" /><p className="text-xl "><span className="font-medium">Date:</span> {assignments.date}</p>
                       </div>
                        <Link to={`/TakeAssignment/${id}`}><button className="btn text-black hover:bg-indigo-700 bg-indigo-500 btn-block">Take Assignments <FaPenAlt className="text-xl" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignments;