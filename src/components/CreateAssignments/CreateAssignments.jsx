import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
const options = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
]

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <section className="p-6 dark:text-gray-800">
                <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
                    <h2 className="w-full text-3xl font-bold leading-tight">Create A Assignment</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Title</label>
                        <input id="name" type="text" placeholder="Title" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Description</label>
                        <input id="name" type="text" placeholder="Description" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1 custom-cursor-default-hover">Marks</label>
                        <input id="name" type="number" placeholder="Marks" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>
                    <div >
                        <label htmlFor="img" className=" block mb-1 ml-1 custom-cursor-default-hover">Image URL</label>
                        <input type="text" name="image" id="img" placeholder="Image Url" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-green-500 dark:bg-gray-100" />
                    </div>

                    <div>
                        <label htmlFor="option" className=" block mb-1 ml-1 custom-cursor-default-hover">Difficulty Level</label>
                        <div >
                            <Select  options={options} />
                        </div>
                    </div>
                  <div>
                  <label htmlFor="option" className=" block mb-1 ml-1 custom-cursor-default-hover">Due Date</label>
                    <div >
                    <DatePicker className="bg-gray-100 text-center rounded w-full h-[50px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-500 hover:dark:ring-green-500 dark:text-gray-50">Submit Assignment </button>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default CreateAssignments;