import { FaLocationArrow } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllAssignmentsCard = ({ assignment, assignments, setAssignments }) => {
    
    const { _id, img, name, description, marks, option } = assignment || {}
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:5000/assignmentsCreate/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Assignments has been deleted.",
                                icon: "success"
                            });
                            const remaining = assignments.filter(ass => ass._id !== _id)
                            setAssignments(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <div className="w-auto  h-auto  text-black mx-auto space-y-6 rounded-2xl    px-6 py-4 shadow-2xl  md:w-[350px]">
                    {/* Card Image */}
                    <img width={350} height={190} className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={img} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div>

                    </div>
                    <div className="space-y-2 h-[120px]">
                        <div className="flex justify-between">
                            <h2 className="font-medium  sm:text-lg md:text-xl ">{name}</h2>
                            <h2 className="font-bold rounded-lg p-1  bg-green-500">Marks : {marks}</h2>
                        </div>
                        <h2 className="font-normal  text-sm  ">{description}</h2>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5  flex items-center justify-between">
                        <h2 className="font-medium  md:text-xl ">Difficulty : {option}</h2>
                      <Link to={`/updateAssignment/${_id}`}>  <button className="btn btn-ghost bg-green-400 text-black hover:bg-teal-100"><GrUpdate className="text-2xl" /></button></Link>
                    </div>

                    <button className="btn btn-block bg-green-400 hover:bg-green-500">View Details <FaLocationArrow className="text-xl text-black" /></button>
                    <div className="flex justify-between">
                        <button onClick={() => handleDelete(_id)} className="btn btn-block bg-green-400 text-black hover:bg-red-700"><MdDeleteForever className="text-2xl text-white" /></button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllAssignmentsCard;