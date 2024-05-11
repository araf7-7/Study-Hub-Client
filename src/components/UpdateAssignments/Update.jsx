
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
// import Select from 'react-select'
import {  useLoaderData, useNavigate } from "react-router-dom";
// const options = [
//     { value: 'easy', label: 'Easy' },
//     { value: 'medium', label: 'Medium' },
//     { value: 'hard', label: 'Hard' }
// ]


const Update = () => {
    const navigate = useNavigate();
    const assignment = useLoaderData()
    const { _id, img, name, description, marks, date } = assignment || {}
    const handleUpdateAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const marks = parseInt(form.marks.value)
        const img = form.img.value;
        const updatedAssignment = { name, description, marks, img }
        console.log(updatedAssignment);

        fetch(`http://localhost:5000/assignmentsCreate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/assignment')
                    
                }
            })

    }
    // const [startDate, setStartDate] = useState(new Date());
    return (

        <div>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleUpdateAssignment} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
                    <h2 className="w-full text-3xl font-bold leading-tight">Update An Assignment</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Title</label>
                        <input id="name" type="text" defaultValue={name} placeholder="Title" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Description</label>
                        <input id="description" defaultValue={description} type="text" placeholder="Description" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Marks</label>
                        <input id="marks" type="number" defaultValue={marks} placeholder="Marks" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div >
                        <label htmlFor="img" className=" block mb-1 ml-1 custom-cursor-default-hover">Image URL</label>
                        <input type="img" name="image" defaultValue={img} id="img" placeholder="Image Url" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>

                    <div>
                        <label htmlFor="date" className=" block mb-1 ml-1 custom-cursor-default-hover">Due Date</label>
                        <div >

                            <input type="img" name="date" readOnly defaultValue={date} id="date" placeholder="Image Url" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-500 hover:dark:ring-green-500 dark:text-gray-50">Update Assignment </button>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Update;