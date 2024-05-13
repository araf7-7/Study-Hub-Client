import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const options = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
]

const CreateAssignments = () => {
    const navigate = useNavigate();
    const handleAddAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const marks = parseInt(form.marks.value)
        const img = form.img.value;
        const option = form.option.value;
        const date = form.date.value;

        const newAssignment = { name, description, marks, img, option, date }
        console.log(newAssignment);

        fetch('http://localhost:5000/assignmentsCreate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/assignment')
                }
            })

    }
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <Helmet>
                <title>Create Assignments</title>
            </Helmet>
            <section className="p-6 bg-indigo-100/70 dark:text-gray-800">
                <form onSubmit={handleAddAssignment} noValidate="" className="container bg-indigo-300/90 w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
                    <h2 className="w-full text-3xl font-bold leading-tight">Create An Assignment</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Title</label>
                        <input id="name" type="text" placeholder="Title" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-indigo-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Description</label>
                        <input id="description" type="text" placeholder="Description" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-indigo-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Marks</label>
                        <input id="marks" type="number" placeholder="Marks" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-indigo-500 dark:bg-gray-100" />
                    </div>
                    <div >
                        <label htmlFor="img" className=" block mb-1 ml-1 custom-cursor-default-hover">Image URL</label>
                        <input type="img" name="image" id="img" placeholder="Image Url" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-indigo-500 dark:bg-gray-100" />
                    </div>

                    <div>
                        <label htmlFor="option" className=" block mb-1 ml-1 custom-cursor-default-hover">Difficulty Level</label>
                        <div >
                            <Select name="option" options={options} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date" className=" block mb-1 ml-1 custom-cursor-default-hover">Due Date</label>
                        <div >
                            <DatePicker name="date" className="bg-gray-100 text-center rounded w-full h-[50px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-indigo-500 focus:dark:ring-indigo-500 hover:dark:ring-indigo-500 dark:text-gray-50">Submit Assignment </button>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default CreateAssignments;