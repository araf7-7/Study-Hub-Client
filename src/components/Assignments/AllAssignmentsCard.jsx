
import { GrUpdate, GrView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import UseAuth from "../UseAuth";


const AllAssignmentsCard = ({ assignment, assignments, setAssignments }) => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const { _id, img, name, description, marks, option, CreatorEmail, } = assignment || {}
    const { user } = UseAuth()
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
                if (user.email !== CreatorEmail) {
                    return Swal.fire({
                        title: "Deleted!",
                        text: "Youre Not eligible to delete this.",
                        icon: "error"
                    });
                }
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
        <div className="my-10  ">
            <div>
                <div data-aos="fade-up" className="lg:w-auto md:w-auto w-[400px]  h-auto  text-black mx-auto space-y-6 rounded-2xl    px-3 py-4 shadow-2xl ">

                    {/* Card Image */}
                    <img width={350} height={190} className="h-[190px] w-[350px]  container mx-auto rounded-2xl bg-gray-400" src={img} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div>

                    </div>
                    <div className="space-y-2 h-[120px]">
                        <div className="flex justify-between">
                            <h2 className="font-medium  sm:text-lg md:text-xl ">{name}</h2>
                            <h2 className="font-bold rounded-lg p-1  bg-indigo-500">Marks : {marks}</h2>
                        </div>
                        <h2 className="font-normal  text-sm  ">{description}</h2>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5  flex items-center justify-between">
                        <h2 className="font-medium  md:text-xl ">Difficulty : {option}</h2>

                    </div>

                    <div className="flex items-center justify-between">
                        <Link to={`/viewAssignment/${_id}`}><button data-tip="View Assignment" className="btn tooltip  bg-orange-600 hover:bg-orange-400"><GrView className="text-xl text-black" /> </button>
                        </Link>
                        <Link to={`/updateAssignment/${_id}`}>  <button data-tip="Update" className="btn btn-ghost tooltip bg-green-400 text-black hover:bg-teal-100"><GrUpdate className="text-2xl" /></button></Link>
                        <button onClick={() => handleDelete(_id)} data-tip="Delete" className="btn  tooltip bg-red-500 text-black hover:bg-red-700"><MdDeleteForever className="text-2xl text-white" /></button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllAssignmentsCard;